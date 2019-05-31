using JsonNet.PrivateSettersContractResolvers;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Net.Core_GraphQL.Models
{
    public class Seeder
    {
        AppDbContext _context;


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
            _context.Database.EnsureDeleted();
            _context.Database.EnsureCreated();

            List<Post> posts = JsonConvert.DeserializeObject<List<Post>>(postData, settings);
            List<Post> comments = JsonConvert.DeserializeObject<List<Post>>(commentData, settings);

            if (!_context.Posts.Any())
            {
                _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Posts ON");
                _context.AddRange(posts);
                _context.SaveChanges();
            }


            if (!_context.Comments.Any())
            {

                _context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT dbo.Comments ON");
                _context.AddRange(comments);
                _context.SaveChanges();
            }
        }
    }
}
