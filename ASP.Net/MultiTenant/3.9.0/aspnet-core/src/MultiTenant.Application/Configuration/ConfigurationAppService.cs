using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using MultiTenant.Configuration.Dto;

namespace MultiTenant.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : MultiTenantAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
