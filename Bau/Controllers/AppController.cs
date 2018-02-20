namespace Bau.Controllers
{
    using Bau.Data;
    using Bau.Services;
    using Bau.ViewModels;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class AppController : Controller
    {
        private readonly IMailService mailService;
        private readonly IBauRepository repository;

        public AppController(
            IMailService mailService,
            IBauRepository repository)
        {
            this.mailService = mailService;
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            //throw new InvalidCastException("Bad things happend");
            ViewBag.Title = "Contact Us";
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Send the email
                mailService.SendMessage("shawn@op.pl", model.Subject, $"From: {model.Name} {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About";
            return View();
        }

        public IActionResult Shop()
        {
            //var results = repository.GetAllProducts();

            //return View(results);

            return View();
        }     
    }
}
