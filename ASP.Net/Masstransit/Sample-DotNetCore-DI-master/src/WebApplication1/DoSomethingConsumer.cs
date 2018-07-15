using System.Threading.Tasks;
using MassTransit;

namespace WebApplication1
{
    public class DoSomethingConsumer :
        IConsumer<DoSomething>
    {
        private readonly IService _service;

        public DoSomethingConsumer(IService service)
        {
            _service = service;
        }

        public async Task Consume(ConsumeContext<DoSomething> context)
        {
            await _service.ServiceTheThing(context.Message.Value);

            await context.RespondAsync<SomethingDone>(new
            {
                Value = $"Received: {context.Message.Value}"
            });
        }
    }
}