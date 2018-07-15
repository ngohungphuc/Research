using System.Net;
using System.Threading;
using System.Threading.Tasks;
using MassTransit;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1
{
    [Route("/")]
    public class Default :
        Controller
    {
        private readonly IRequestClient<DoSomething> _requestClient;

        public Default(IRequestClient<DoSomething> requestClient)
        {
            _requestClient = requestClient;
        }

        [HttpGet]
        public async Task<IActionResult> Get(CancellationToken cancellationToken)
        {
            try
            {
                var request = _requestClient.Create(new {Value = "Hello, World."}, cancellationToken);

                var response = await request.GetResponse<SomethingDone>();

                return Content($"{response.Message.Value}, MessageId: {response.MessageId:D}");
            }
            catch (RequestTimeoutException exception)
            {
                return StatusCode((int) HttpStatusCode.RequestTimeout);
            }
        }
    }
}