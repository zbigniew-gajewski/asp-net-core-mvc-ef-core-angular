namespace Bau.Controllers
{
    using Bau.Data;
    using Microsoft.AspNetCore.Mvc;

    public class AppController : Controller
    {
        private readonly IBauRepository repository;

        public AppController(
            IBauRepository repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
