using System.Threading.Tasks;
using MultiTenant.Configuration.Dto;

namespace MultiTenant.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
