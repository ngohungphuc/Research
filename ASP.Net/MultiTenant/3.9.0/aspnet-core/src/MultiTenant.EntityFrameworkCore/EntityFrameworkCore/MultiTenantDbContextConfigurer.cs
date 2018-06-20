using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace MultiTenant.EntityFrameworkCore
{
    public static class MultiTenantDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<MultiTenantDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<MultiTenantDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
