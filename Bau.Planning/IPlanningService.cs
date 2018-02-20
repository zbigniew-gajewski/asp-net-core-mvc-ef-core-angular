namespace Bau.Planning
{
    using Bau.Data;
    using System;

    public interface IPlanningService
    {
        void GeneratePlanForDateRagne(
                 BauDbContext ctx,
                 DateTime startDate,
                 DateTime endDate);
    }
}