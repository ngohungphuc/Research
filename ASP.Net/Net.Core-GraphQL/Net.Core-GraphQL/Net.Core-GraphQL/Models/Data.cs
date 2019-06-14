using JsonNet.PrivateSettersContractResolvers;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace Net.Core_GraphQL.Models
{
    public class Seeder
    {
        private readonly AppDbContext _context;

        public Seeder(AppDbContext context)
        {
            _context = context;

        }

        public void Seedit(string postData, string commentData)
        {
            JsonSerializerSettings settings = new JsonSerializerSettings
            {
                ContractResolver = new PrivateSetterContractResolver()

            };

            List<Post> posts = JsonConvert.DeserializeObject<List<Post>>(postData, settings);
            List<Comment> comments = JsonConvert.DeserializeObject<List<Comment>>(commentData, settings);

            if (!_context.Posts.Any())
            {
                _context.AddRange(posts);
                _context.SaveChanges();
            }

            if (!_context.Comments.Any())
            {
                _context.AddRange(comments);
                _context.SaveChanges();
            }
        }
    }
}
