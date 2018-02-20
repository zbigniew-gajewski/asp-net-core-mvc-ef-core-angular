namespace Bau.Data
{
    using Bau.Data.Entities;
    using Bau.Planning;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Identity;
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;

    public class BauSeeder
    {
        private readonly BauDbContext ctx;
        private readonly IHostingEnvironment hosting;
        private readonly UserManager<StoreUser> userManager;
        private readonly IPlanningService planningService;

        public BauSeeder(
            BauDbContext ctx,
            IHostingEnvironment hosting,
            UserManager<StoreUser> userManager,
            IPlanningService planningService)
        {
            this.ctx = ctx;
            this.hosting = hosting;
            this.userManager = userManager;
            this.planningService = planningService;
        }

        public async Task Seed()
        {
            ctx.Database.EnsureCreated();

            var user = await userManager.FindByEmailAsync("bau@bau.bau");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Bau",
                    LastName = "Bau",
                    UserName = "bau@bau.bau",
                    Email = "bau@bau.bau"
                };

                var result = await userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default user");
                }
            }

            
            if (!ctx.Engineers.Any())
            {
                var filePath = Path.Combine(hosting.ContentRootPath, "../Bau.Data/engineers.json");
                var json = File.ReadAllText(filePath);
                var engineers = JsonConvert.DeserializeObject<IEnumerable<Engineer>>(json);

                ctx.Engineers.AddRange(engineers);
                ctx.SaveChanges();

                planningService.GeneratePlanForDateRagne(
                    ctx,
                    new DateTime(2018, 2, 1),
                    new DateTime(2018, 2, 28));
            }
        }

     
    }
}
