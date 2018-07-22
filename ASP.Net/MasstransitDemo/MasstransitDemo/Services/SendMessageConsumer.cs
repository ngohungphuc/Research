using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasstransitDemo.Models;
using MassTransit;

namespace MasstransitDemo.Services
{
    public class SendMessageConsumer : IConsumer<Message>
    {
        public Task Consume(ConsumeContext<Message> context)
        {
            Console.WriteLine($"Receive message value: {context.Message.Value}");
            return Task.CompletedTask;
        }
    }
}
