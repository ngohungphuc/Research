using System.Threading.Tasks;
using Abp.Application.Services;
using MultiTenant.Sessions.Dto;

namespace MultiTenant.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
