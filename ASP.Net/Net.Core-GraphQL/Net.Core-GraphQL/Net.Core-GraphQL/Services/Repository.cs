using Microsoft.EntityFrameworkCore;
using Net.Core_GraphQL.Models;
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

        public async Task<IEnumerable<Post>> GetAllPost()
        {
            return await _appDbContext.Posts.Include(x => x.Comments).ToListAsync();
        }

        public IQueryable<Post> GetPostQuery()
        {
            return _appDbContext.Posts.AsQueryable();
        }

        public async Task<IEnumerable<Comment>> GetCommentByPostId(int postId)
        {
            return await _appDbContext.Comments.Where(x => x.PostId == postId).ToListAsync();
        }


        public async Task<IEnumerable<Comment>> GetAllComments()
        {
            return await _appDbContext.Comments.Include(x => x.Post).ToListAsync();
        }

        public IQueryable<Comment> GetCommentQuery()
        {
            return _appDbContext.Comments.AsQueryable();
        }
    }
}
