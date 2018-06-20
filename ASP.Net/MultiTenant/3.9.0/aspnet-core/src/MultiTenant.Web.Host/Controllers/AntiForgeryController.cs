using Microsoft.AspNetCore.Antiforgery;
using MultiTenant.Controllers;

namespace MultiTenant.Web.Host.Controllers
{
    public class AntiForgeryController : MultiTenantControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
