using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Github.Webhook.Hubs;
using Github.Webhook.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.WebHooks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Github.Webhook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        private readonly IGithubHookService _githubHookService;

        public GitHubController(IGithubHookService githubHookService)
        {
            _githubHookService = githubHookService;
        }

        [GitHubWebHook]
        public async Task<IActionResult> GitHubHandler(string id, string @event, JObject data)
        {
            var val = data.Root.ToObject<RootObject>();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _githubHookService.BroadcastMessage(val.issue.html_url);

            return Ok();
        }
    }
}
