using GraphQL;
using GraphQL.Types;

namespace Net.Core_GraphQL.GraqhQL
{
    public class DataSchema : Schema
    {
        public DataSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<Query>();
        }
    }
}
