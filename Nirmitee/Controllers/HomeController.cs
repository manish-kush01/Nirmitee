using Microsoft.AspNetCore.Mvc;
using Nirmitee.Models;
using System.Diagnostics;

namespace Nirmitee.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculate()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveData(string employeeName, decimal basicSalary, int daysWorked, decimal hraPercentage, decimal conveyanceAllowance, decimal medicalAllowance)
        {
            // Your logic to save the data in the database or process it in any other way

            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}