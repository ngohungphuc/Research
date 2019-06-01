using GraphQL.Types;
using Net.Core_GraphQL.Models;
using Net.Core_GraphQL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Net.Core_GraphQL.GraqhQL
{
    public class PostType : ObjectGraphType<Post>
    {
        public PostType(Repository repository)
        {
            Field(x => x.Id);
            Field(x => x.Title);
            Field(x => x.Body);
            Field(x => x.UserId);
            Field<ListGraphType<CommentType>, IEnumerable<Comment>>().Name("Comment")
                .ResolveAsync(ctx =>
                {
                    return repository.GetCommentByPostId(ctx.Source.Id);
                });
        }
    }

    public class CommentType : ObjectGraphType<Comment>
    {
        public CommentType()
        {
            Field(x => x.Id);
            Field(x => x.Email);
            Field(x => x.Body);
            Field(x => x.Name);
            Field(x => x.PostId);
        }
    }
}
