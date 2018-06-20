using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using MultiTenant.Configuration;
using MultiTenant.Web;

namespace MultiTenant.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class MultiTenantDbContextFactory : IDesignTimeDbContextFactory<MultiTenantDbContext>
    {
        public MultiTenantDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<MultiTenantDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            MultiTenantDbContextConfigurer.Configure(builder, configuration.GetConnectionString(MultiTenantConsts.ConnectionStringName));

            return new MultiTenantDbContext(builder.Options);
        }
    }
}
