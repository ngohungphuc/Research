using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BackgroundService.Models;
using BackgroundService.Services;
using Microsoft.Extensions.Caching.Memory;

namespace BackgroundService.Controllers
{
    public class HomeController : Controller
    {
        private IMemoryCache memoryCache;

        public HomeController(IMemoryCache memoryCache)
        {
            this.memoryCache = memoryCache;
        }

        public IActionResult Index()
        {
            if (!this.memoryCache.TryGetValue(ExampleGuidService.ExampleGuidsKey, out List<ExampleGuid> cacheEntry))
            {
                cacheEntry = new List<ExampleGuid>();
            }

            return View(cacheEntry);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
