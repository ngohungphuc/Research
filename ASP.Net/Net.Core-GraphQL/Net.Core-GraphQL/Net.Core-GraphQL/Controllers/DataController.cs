using Microsoft.AspNetCore.Mvc;
using Net.Core_GraphQL.Services;
using System.Threading.Tasks;

namespace Net.Core_GraphQL.Controllers
{
    [Route("api/[controller]/[action]")]
    [Produces("application/json")]
    public class DataController : Controller
    {
        private readonly Repository _repository;

        public DataController(Repository repository)
        {
            _repository = repository;
        }

        public async Task<IActionResult> Posts()
        {
            var result = await _repository.GetAllPost();
            return Ok(result);
        }

        public async Task<IActionResult> Comments()
        {
            var result = await _repository.GetAllComments();
            return Ok(result);
        }
    }
}
