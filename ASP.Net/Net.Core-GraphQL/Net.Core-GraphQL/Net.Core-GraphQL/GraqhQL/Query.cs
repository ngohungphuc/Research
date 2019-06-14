using GraphQL.Types;
using Net.Core_GraphQL.Services;
using System.Collections.Generic;
using System.Linq;

namespace Net.Core_GraphQL.GraqhQL
{
    public class Query : ObjectGraphType
    {
        public Query(Repository repository)
        {
            Field<ListGraphType<PostType>>("posts",
                arguments: new QueryArguments(new List<QueryArgument>
                {
                    new QueryArgument<IdGraphType>
                    {
                        Name = "id"
                    },
                    new QueryArgument<StringGraphType>
                    {
                        Name = "title"
                    },
                    new QueryArgument<StringGraphType>
                    {
                        Name = "body"
                    },
                    new QueryArgument<IdGraphType>
                    {
                        Name = "userId"
                    },
                    new QueryArgument<ListGraphType<CommentType>>
                    {
                        Name = "comment"
                    }
                }),
                resolve: context =>
                {
                    var query = repository.GetPostQuery();

                    var postId = context.GetArgument<int?>("id");
                    if (postId.HasValue)
                    {
                        return query.Where(r => r.Id == postId.Value);
                    }

                    var title = context.GetArgument<string>("title");
                    if (!string.IsNullOrEmpty(title))
                    {
                        return query.Where(r => r.Title == title);
                    }

                    var body = context.GetArgument<string>("body");
                    if (!string.IsNullOrEmpty(body))
                    {
                        return query.Where(r => r.Body == body);
                    }


                    var userId = context.GetArgument<int?>("userId");
                    if (userId.HasValue)
                    {
                        return query.Where(r => r.UserId == userId);
                    }

                    return query.ToList();
                }
            );
        }
    }
}
