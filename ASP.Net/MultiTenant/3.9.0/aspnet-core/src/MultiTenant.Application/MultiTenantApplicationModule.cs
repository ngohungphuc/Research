using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MultiTenant.Authorization;

namespace MultiTenant
{
    [DependsOn(
        typeof(MultiTenantCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class MultiTenantApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<MultiTenantAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(MultiTenantApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
