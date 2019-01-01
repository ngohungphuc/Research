using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Github.Webhook.Hubs
{
    public class GithubSignalRHub : Hub
    {

    }

    public interface IGithubHookService
    {
        Task BroadcastMessage(string url);
    }

    public class GithubHookService : IGithubHookService
    {
        private readonly IHubContext<GithubSignalRHub> _hubContext;

        public GithubHookService(IHubContext<GithubSignalRHub> hubContext)
        {
            _hubContext = hubContext ?? throw new ArgumentNullException(nameof(hubContext));
        }

        public async Task BroadcastMessage(string url)
        {
            await _hubContext.Clients.All.SendAsync("BroadcastMessage", url);
        }
    }
}
