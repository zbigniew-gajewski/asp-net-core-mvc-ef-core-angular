namespace Bau.Data.Entities
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class PlanItem
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public DayPart DayPart { get; set; }
        public int EngineerId { get; set; }
        public Engineer Engineer { get; set; }
    }
}
