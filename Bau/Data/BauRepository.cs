namespace Bau.Data
{
    using Bau.Data.Entities;
    using Bau.Planning;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class BauRepository : IBauRepository
    {
        private readonly BauDbContext ctx;
        private readonly ILogger<BauRepository> logger;
        private readonly IPlanningService planningService;

        public BauRepository(
            BauDbContext ctx,
            ILogger<BauRepository> logger,
            IPlanningService planningService)
        {
            this.ctx = ctx;
            this.logger = logger;
            this.planningService = planningService;
        }
     
        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
     
        public IEnumerable<Engineer> GetAllEngineers()
        {
            return ctx.Engineers
                .Include(p => p.PlanItems)
                .ToList();
        }

        public void GeneratePlan(
            DateTime startDate,
            DateTime endDate)
        {
            planningService.GeneratePlanForDateRagne(ctx, startDate, endDate);
        }

        public IEnumerable<PlanItem> GetPlanItems(
            DateTime startDate, 
            DateTime endDate)
        {
            return ctx.PlanItems
                .Where(p => startDate <= p.Date && p.Date <= endDate)
                .Include(p => p.Engineer)
                .ToList();
        }
    }
}
