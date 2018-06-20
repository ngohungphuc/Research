using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MultiTenant.MultiTenancy.Dto;

namespace MultiTenant.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
