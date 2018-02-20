namespace Bau.Data
{
    using System;
    using System.Collections.Generic;
    using Bau.Data.Entities;

    public interface IBauRepository
    {
        bool SaveAll();
        IEnumerable<Engineer> GetAllEngineers();
        void GeneratePlan(DateTime startDate, DateTime endDate);
        IEnumerable<PlanItem> GetPlanItems(DateTime startDate, DateTime endDate);
    }
}