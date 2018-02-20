using AutoMapper;
using Bau.Data;
using Bau.Data.Entities;
using Bau.Planning;
using Bau.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Text;
using System.Threading.Tasks;

namespace Bau
{
    public class Startup
    {
        private readonly IConfiguration config;
        private readonly IHostingEnvironment env;

        public Startup(
            IConfiguration config,
            IHostingEnvironment env)
        {
            this.config = config;
            this.env = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(
            IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;

            })
            .AddEntityFrameworkStores<BauDbContext>();


            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = config["Tokens:Issuer"],
                        ValidAudience = config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]))
                    };
                });

            services.AddDbContext<BauDbContext>(cfg =>
            {
                cfg.UseInMemoryDatabase("Bau");
                //cfg.UseSqlServer(config.GetConnectionString("BauConnectionString"));
            });

            services.AddAutoMapper();

            services.AddTransient<IMailService, NullMailService>();

            services.AddTransient<BauSeeder>();

            services.AddScoped<IBauRepository, BauRepository>();
            services.AddScoped<IPlanningService, PlanningService>();

            services
                .AddMvc(opt =>
                {
                    //// environment varialbe should be set: set DisableSSL=true
                    //if (env.IsProduction() && config["DisableSSL"] != "true") 
                    if (env.IsProduction()) // environment varialbe should be set: set DisableSSL=true
                    {
                        //opt.Filters.Add(new RequireHttpsAttribute());
                    }
                    else
                    {

                    }
                })
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app,
            IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            // app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(
                cfg =>
                {
                    cfg.MapRoute("Foo", "{controller}/{action}/{id?}", new { controller = "App", Action = "index" });
                });

            if (env.IsDevelopment())
            {
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<BauSeeder>();
                    seeder.Seed().Wait();
                }
            }
        }
    }
}
