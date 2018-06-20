using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace MultiTenant.Controllers
{
    public abstract class MultiTenantControllerBase: AbpController
    {
        protected MultiTenantControllerBase()
        {
            LocalizationSourceName = MultiTenantConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
