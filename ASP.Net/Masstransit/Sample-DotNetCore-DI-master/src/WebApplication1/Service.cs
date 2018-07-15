using System.Threading.Tasks;
using GreenPipes.Util;

namespace WebApplication1
{
    public class Service :
        IService
    {
        public Task ServiceTheThing(string value)
        {
            return TaskUtil.Completed;
        }
    }
}