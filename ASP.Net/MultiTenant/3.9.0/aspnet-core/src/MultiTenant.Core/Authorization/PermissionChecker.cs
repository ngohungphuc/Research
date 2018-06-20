using Abp.Authorization;
using MultiTenant.Authorization.Roles;
using MultiTenant.Authorization.Users;

namespace MultiTenant.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
