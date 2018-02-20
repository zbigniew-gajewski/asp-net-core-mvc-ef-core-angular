namespace Bau.Controllers
{
    using AutoMapper;
    using Bau.Data;
    using Bau.Data.Entities;
    using Bau.ViewModels;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;

    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PlanningController : Controller
    {
        private readonly IBauRepository repository;
        private readonly IMapper mapper;
        private readonly ILogger<PlanningController> logger;
        private readonly UserManager<StoreUser> userManager;

        public PlanningController(
            IBauRepository repository,
            IMapper mapper,
            ILogger<PlanningController> logger,
            UserManager<StoreUser> userManager)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.logger = logger;
            this.userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get([FromHeader]string yearString, [FromHeader]string monthString)
        {
            try
            {
                var yearMonthPair = new YearMonthPair(yearString, monthString);
                var planItems = repository.GetPlanItems(yearMonthPair.StartDate, yearMonthPair.EndDate).ToList();

                var startDate = yearMonthPair.StartDate;
                var endDate = yearMonthPair.EndDate;

                var mappedResult = new List<PlanItemViewModel>();

                while (startDate <= endDate)
                {
                    var planItemViewModel = new PlanItemViewModel(startDate);

                    foreach (var planItem in planItems.Where(p => p.Date == startDate && p.Engineer != null).ToList())
                    {
                        planItemViewModel
                            .SetEngineer(
                                planItem.DayPart, 
                                planItem.EngineerId, 
                                planItem.Engineer.FirstName, 
                                planItem.Engineer.LastName);
                    }

                    mappedResult.Add(planItemViewModel);

                    startDate = startDate.AddDays(1);
                }

                return Ok(mappedResult);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to generate plan: {ex}");
                return BadRequest("Failed to generate plan!");
            }
        }

        [HttpGet("generate")]
        public IActionResult Generate([FromHeader]string yearString, [FromHeader]string monthString)
        {
            try
            {
                var yearMonthPair = new YearMonthPair(yearString, monthString);
                repository.GeneratePlan(yearMonthPair.StartDate, yearMonthPair.EndDate);

                return Ok(null);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to generate plan: {ex}");
                return BadRequest("Failed to generate plan!");
            }
        }

        private struct YearMonthPair
        {
            public YearMonthPair(
                string yearString,
                string monthString)
            {
                var parsingResult = Int32.TryParse(yearString, out int year);
                if (!parsingResult)
                {
                    throw new ArgumentException($"Year {yearString} can not be parsed!");
                }

                if (year < 1900 || year > 9999)
                {
                    throw new ArgumentException($"Year {year} must be between 19000 and 9999!");
                }

                parsingResult = Int32.TryParse(monthString, out int month);
                if (!parsingResult)
                {
                    throw new ArgumentException($"Year {monthString} can not be parsed!");
                }

                if (month < 1 || month > 12)
                {
                    throw new ArgumentException($"Year {month} must be between 1 and 12!");
                }

                StartDate = new DateTime(year, month, 1);

                if (month == 12)
                {
                    EndDate = new DateTime(year, 12, 31);
                }
                else
                {
                    EndDate = new DateTime(year, month + 1, 1).AddDays(-1);
                }
            }

            public DateTime StartDate { get; }
            public DateTime EndDate { get; }
        }
    }
}
