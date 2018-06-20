using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MultiTenant.Configuration;

namespace MultiTenant.Web.Host.Startup
{
    [DependsOn(
       typeof(MultiTenantWebCoreModule))]
    public class MultiTenantWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public MultiTenantWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(MultiTenantWebHostModule).GetAssembly());
        }
    }
}
