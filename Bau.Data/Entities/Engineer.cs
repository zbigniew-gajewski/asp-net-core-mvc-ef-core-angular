namespace Bau.Data.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Engineer
    {
        public Engineer()
        {
            PlanItems = new List<PlanItem>();
        }

        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<PlanItem> PlanItems { get; set; }
    }
}
