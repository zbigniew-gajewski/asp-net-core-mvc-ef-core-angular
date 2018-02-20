namespace Bau.ViewModels
{
    using Bau.Data.Entities;
    using System;

    public class PlanItemViewModel
    {
        public PlanItemViewModel(
            DateTime date)
        {
            Date = date.ToString("yyyy-MM-dd   dddd");
            MorningEngineer = new EngineerViewModel();
            AfternoonEngineer = new EngineerViewModel();
        }

        public string Date { get; private set; }
        
        public EngineerViewModel MorningEngineer { get; private set; }
        public EngineerViewModel AfternoonEngineer { get; private set; }

        public void SetEngineer(
            DayPart dayPart,
            int engineerId,
            string firrstName,
            string lastName)
        {
            if (dayPart == DayPart.Morning)
            {
                MorningEngineer.SetEngineer(engineerId, firrstName, lastName);
            }
            else if (dayPart == DayPart.Afternoon)
            {
                AfternoonEngineer.SetEngineer(engineerId, firrstName, lastName);
            }
        }
    }
}
