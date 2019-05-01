using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalR.Models
{
    public class ConnectionHub : Hub
    {
        public async Task Send(string userId)
        {
            var message = $"Send message to you with user id {userId}";
            await Clients.Client(userId).SendAsync("ReceiveMessage", message);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }
    }
}
