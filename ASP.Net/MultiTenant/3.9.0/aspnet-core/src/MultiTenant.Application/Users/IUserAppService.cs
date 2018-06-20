using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MultiTenant.Roles.Dto;
using MultiTenant.Users.Dto;

namespace MultiTenant.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
