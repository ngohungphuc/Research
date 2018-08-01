using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor;

namespace MultiTenantDemo.Services
{
    public class TenantViewLocationExpander: IViewLocationExpander
    {
        private const string _tenant = "tenant";
        public void PopulateValues(ViewLocationExpanderContext context)
        {
            string tenantArea = string.Empty;
            context.ActionContext.ActionDescriptor.RouteValues.TryGetValue(_tenant, out tenantArea);

            context.Values[_tenant] = tenantArea;
        }

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            if (context.ActionContext.RouteData.Values.ContainsKey(_tenant))
            {
                string tenantArea = RazorViewEngine.GetNormalizedRouteValue(context.ActionContext, _tenant);
                IEnumerable<string> tenantViewLocation = new string[]
                {
                //    $"/Views/Tenants/{tenantArea}/Views/{{1}}/{{0}}.cshtml",
                    $"/Views/Tenants/{tenantArea}/Views/Shared/{{0}}.cshtml",
                };

                viewLocations = tenantViewLocation.Concat(viewLocations);

            }

            return viewLocations;
        }
    }
}
