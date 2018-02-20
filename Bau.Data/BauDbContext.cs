namespace Bau.Data
{
    using Bau.Data.Entities;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class BauDbContext : IdentityDbContext<StoreUser>
    {
        public BauDbContext(
            DbContextOptions<BauDbContext> options) 
            : base(options)
        {
        }

        public DbSet<Engineer> Engineers { get; set; }
        public DbSet<PlanItem> PlanItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Engineer>()
               .HasMany(p => p.PlanItems)
               .WithOne(p => p.Engineer)
               .HasForeignKey(p => p.EngineerId)
               .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
