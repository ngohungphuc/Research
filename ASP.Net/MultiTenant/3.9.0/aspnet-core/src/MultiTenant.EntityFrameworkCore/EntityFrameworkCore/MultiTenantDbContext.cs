using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using MultiTenant.Authorization.Roles;
using MultiTenant.Authorization.Users;
using MultiTenant.MultiTenancy;

namespace MultiTenant.EntityFrameworkCore
{
    public class MultiTenantDbContext : AbpZeroDbContext<Tenant, Role, User, MultiTenantDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public MultiTenantDbContext(DbContextOptions<MultiTenantDbContext> options)
            : base(options)
        {
        }
    }
}
