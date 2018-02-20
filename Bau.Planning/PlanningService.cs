namespace Bau.Planning
{
    using System;
    using Bau.Data;
    using System.Linq;
    using Bau.Data.Entities;
    using System.Collections.Generic;

    public class PlanningService : IPlanningService
    {
        public void GeneratePlanForDateRagne(
          BauDbContext ctx,
          DateTime startDate,
          DateTime endDate)
        {
            RemovePlanItemsForDateRange(ctx, startDate, endDate);

            var currentDate = startDate;

            while (currentDate <= endDate)
            {
                if (IsWorkingDay(currentDate))
                {
                    CreatePlanItem(ctx, currentDate, DayPart.Morning);
                    CreatePlanItem(ctx, currentDate, DayPart.Afternoon);
                }

                currentDate = currentDate.AddDays(1);
            }
        }

        private void RemovePlanItemsForDateRange(
            BauDbContext ctx, 
            DateTime startDate, 
            DateTime endDate)
        {
            var currentDayPlanItems = ctx.PlanItems.Where(p => startDate <= p.Date && p.Date <= endDate);
            ctx.PlanItems.RemoveRange(currentDayPlanItems);
            ctx.SaveChanges();
        }

        private void CreatePlanItem(
            BauDbContext ctx,
            DateTime currentDate,
            DayPart dayPart)
        {
            var availableEngineer = GetAvailableEngineer(ctx, currentDate, dayPart);

            if (availableEngineer == null)
            {
                return;
            }

            var newPlanItem = new PlanItem()
            {
                Date = currentDate,
                DayPart = dayPart,
                Engineer = availableEngineer,
                EngineerId = availableEngineer.Id
            };

            availableEngineer.PlanItems.Add(newPlanItem);
            ctx.PlanItems.Add(newPlanItem);
            ctx.SaveChanges();
        }

        private Engineer GetAvailableEngineer(
             BauDbContext ctx,
             DateTime currentDate,
             DayPart dayPart)
        {
            // rule 1 and 2
            var excludedEngineerIds = GetExcludedEngineerIds(ctx, currentDate);

            // First get not used engineers for period of time containing WORKING DAYS 
            // where NUMBER OF WORKING DAYS is equal the number of engineers divided by 2.
            // Otherwise we could fill every two weeks by only 10 engineers.
            var availableEngineerIds =
                GetNotUsedEngineerIdList(ctx, currentDate)
                .Except(excludedEngineerIds); // rule one & two

            // then get engineers from opposite dayPart in order to fulfill the second part of the day within two weeks
            // rule 3
            if (availableEngineerIds.Count() == 0)
            {
                availableEngineerIds =
                    GetEngineerIdListForPreviousPeriodForOppositeDayPart(ctx, currentDate, dayPart)
                    .Except(excludedEngineerIds); // rule one, two
            }

            return ctx.Engineers
                .Where(e => availableEngineerIds.Contains(e.Id))
                .OrderBy(e => Guid.NewGuid()) // trick: randomization
                .FirstOrDefault();
        }

        private List<int> GetExcludedEngineerIds(
            BauDbContext ctx,
            DateTime currentDate)
        {
            var engineersFromPreviousDayIds = GetEngineerIdListForPreviousDay(ctx, currentDate);
            var engineersFromTheSameDayIds = GetEngineerIdListForCurrentDay(ctx, currentDate);
            var excludedEngineerIds =
                engineersFromPreviousDayIds
                    .Union(engineersFromTheSameDayIds)
                    .ToList();

            return excludedEngineerIds == null || excludedEngineerIds.Count == 0
                ? new List<int>()
                : new List<int>(excludedEngineerIds);
        }

        private List<int> GetNotUsedEngineerIdList(
            BauDbContext ctx,
            DateTime currentDate)
        {
            var startDate = GetStartDateForAllEnginner(ctx, currentDate);

            var usedEngineerIds = ctx.PlanItems
                    .Where(i => startDate <= i.Date && i.Date <= currentDate)
                    .Select(i => i.EngineerId)
                    .Distinct()
                    .ToList();

            var notUsedEngineerIds = ctx
                .Engineers
                .Where(e => !usedEngineerIds.Contains(e.Id))
                .Select(e => e.Id)
                .Distinct()
                .ToList();

            return notUsedEngineerIds == null || notUsedEngineerIds.Count == 0
                  ? new List<int>()
                  : new List<int>(notUsedEngineerIds);

        }


        private List<int> GetEngineerIdListForPreviousPeriodForOppositeDayPart(
            BauDbContext ctx,
            DateTime currentDate,
            DayPart dayPart)
        {
            var oppositeDayPart = dayPart == DayPart.Morning ? DayPart.Afternoon : DayPart.Morning;

            var startDate = GetStartDateForAllEnginner(ctx, currentDate);

            var engineerIds = ctx.PlanItems
                    .Where(i => startDate <= i.Date && i.Date <= currentDate && i.DayPart == oppositeDayPart)
                    .Select(i => i.EngineerId)
                    .Distinct()
                    .ToList();

            return engineerIds == null || engineerIds.Count == 0
                ? new List<int>()
                : new List<int>(engineerIds);
        }


        private List<int> GetEngineerIdListForCurrentDay(
            BauDbContext ctx,
            DateTime currentDate)
        {
            var excludedIds = ctx.PlanItems
                    .Where(i => i.Date == currentDate)
                    .Select(i => i.EngineerId)
                    .Distinct()
                    .ToList();

            return excludedIds == null || excludedIds.Count == 0
                ? new List<int>()
                : new List<int>(excludedIds);
        }

        private List<int> GetEngineerIdListForPreviousDay(
            BauDbContext ctx,
            DateTime currentDate)
        {
            var excludedIds = ctx.PlanItems
                    .Where(i => i.Date == GetStartDateForPreviousWorkingDay(ctx, currentDate))
                    .Select(i => i.EngineerId)
                    .Distinct()
                    .ToList();

            return excludedIds == null || excludedIds.Count == 0
                ? new List<int>()
                : new List<int>(excludedIds);
        }

        private DateTime GetStartDateForAllEnginner(
             BauDbContext ctx,
             DateTime currentDate)
        {
            var numberOfWorkingDays = ctx.Engineers.Count() / 2;
            var startDate = currentDate;
            var actualNumberOfWorkingDays = 0;

            while (true)
            {
                if (IsWorkingDay(startDate))
                {
                    actualNumberOfWorkingDays += 1;
                }

                startDate = startDate.AddDays(-1);

                if (actualNumberOfWorkingDays == numberOfWorkingDays)
                {
                    break;
                }
            }

            return startDate;
        }

        private DateTime GetStartDateForPreviousWorkingDay(
             BauDbContext ctx,
             DateTime currentDate)
        {
            var startDate = currentDate;
            var actualNumberOfWorkingDays = 0;

            while (true)
            {
                if (IsWorkingDay(startDate))
                {
                    actualNumberOfWorkingDays += 1;
                }

                startDate = startDate.AddDays(-1);

                if (actualNumberOfWorkingDays == 1)
                {
                    break;
                }
            }

            return startDate;
        }

        private bool IsWorkingDay(DateTime startDate)
        {
            return startDate.DayOfWeek != DayOfWeek.Saturday && startDate.DayOfWeek != DayOfWeek.Sunday;
        }
    }
}
