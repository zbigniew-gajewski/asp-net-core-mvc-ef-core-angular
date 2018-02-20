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

    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class EngineersController : Controller
    {
        private readonly IBauRepository repository;
        private readonly IMapper mapper;
        private readonly ILogger<EngineersController> logger;
        private readonly UserManager<StoreUser> userManager;

        public EngineersController(
            IBauRepository repository,
            IMapper mapper,
            ILogger<EngineersController> logger,
            UserManager<StoreUser> userManager)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.logger = logger;
            this.userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var results = repository.GetAllEngineers();
                var mappedResult = mapper.Map<IEnumerable<Engineer>, IEnumerable<EngineerViewModel>>(results);
                return Ok(mappedResult);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get engineers: {ex}");
                return BadRequest("Failed to get engineers");
            }
        }        
    }
}
