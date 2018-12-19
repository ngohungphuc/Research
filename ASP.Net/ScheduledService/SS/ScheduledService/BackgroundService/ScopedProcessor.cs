using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using ScheduledService.Services;

namespace ScheduledService.BackgroundService
{
    public abstract class ScopedProcessor : HostedService
    {
        private readonly IServiceScopeFactory _serviceScopeFactory;

        protected ScopedProcessor(IServiceScopeFactory serviceScopeFactory) : base()
        {
            _serviceScopeFactory = serviceScopeFactory;
        }

        /// <summary>
        /// To use scoped services within an IHostedService, create a scope. 
        /// No scope is created for a hosted service by default.
        /// override logic of abstract class HostedService
        /// </summary>
        /// <returns></returns>
        protected override async Task ProcessBackgroundTask()
        {
            using (var scope = _serviceScopeFactory.CreateScope())
            {
                await ProcessInScope(scope.ServiceProvider);
            }
        }

        public abstract Task ProcessInScope(IServiceProvider serviceProvider);
    }
}
