using Microsoft.AspNetCore.Mvc;

namespace Nirmitee.Controllers
{
    public class CalculateController : Controller
    {
        [HttpGet]
        public IActionResult Calculate()
        {
            return View();
        }
    }
}
