using System.Threading.Tasks;

namespace WebApplication1
{
    public interface IService
    {
        Task ServiceTheThing(string value);
    }
}