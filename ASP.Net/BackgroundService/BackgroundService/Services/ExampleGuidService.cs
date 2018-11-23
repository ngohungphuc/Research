using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace BackgroundService.Services
{
    public class ExampleGuidService : BackgroundService
    {
        public const string ExampleGuidsKey = "ExampleGuids";
        private IMemoryCache memoryCache;

        public ExampleGuidService(IMemoryCache memoryCache)
        {
            this.memoryCache = memoryCache;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                GenerateNewExampleGuid();

                await Task.Delay(1000 * 10, stoppingToken);
            }

        }

        private void GenerateNewExampleGuid()
        {
            ExampleGuid example = new ExampleGuid
            {
                Timestamp = DateTime.Now,
                Guid = Guid.NewGuid()
            };

            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromHours(24));

            if (!this.memoryCache.TryGetValue(ExampleGuidService.ExampleGuidsKey, out List<ExampleGuid> cacheEntry))
            {
                cacheEntry = new List<ExampleGuid>();
            }

            cacheEntry.Add(example);
            this.memoryCache.Set(ExampleGuidService.ExampleGuidsKey, cacheEntry, cacheEntryOptions);
        }
    }

    public class ExampleGuid
    {
        public Guid Guid { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
