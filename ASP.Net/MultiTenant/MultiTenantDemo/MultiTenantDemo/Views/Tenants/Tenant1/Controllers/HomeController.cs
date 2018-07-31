using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MultiTenantDemo.Models;

namespace MultiTenantDemo.Views.Tenants.Tenant1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
