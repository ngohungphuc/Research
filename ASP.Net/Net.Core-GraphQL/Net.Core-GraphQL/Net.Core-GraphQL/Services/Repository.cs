using Microsoft.EntityFrameworkCore;
using Net.Core_GraphQL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Net.Core_GraphQL.Services
{
    public class Repository
    {
        private readonly AppDbContext _appDbContext;

        public Repository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IEnumerable<Post>> GetAll()
        {
            return await _appDbContext.Posts
                .ToListAsync();
        }
    }
}
