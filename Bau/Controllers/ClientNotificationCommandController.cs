namespace Bau.Controllers
{
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class ClientNotificationCommandController : Controller
    {
        private readonly ILogger<EngineersController> logger;

        public ClientNotificationCommandController(
            ILogger<EngineersController> logger)
        {
            this.logger = logger;
        }

        [HttpGet("notifyallclientstorefreshplanitems")]
        public IActionResult NotifyAllClientsToRefreshPlanItems()
        {
            logger.LogInformation("Client notification: notifyallclientstorefreshplanitems");
            return Ok("");
        }        
    }
}
