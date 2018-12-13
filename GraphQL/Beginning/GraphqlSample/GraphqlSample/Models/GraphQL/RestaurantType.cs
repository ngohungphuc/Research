using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace GraphqlSample.Models.GraphQL
{
    public class RestaurantType : ObjectGraphType<Restaurant>
    {
        public RestaurantType()
        {
            Name = "Restaurant";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the Restaurant.");
            Field(x => x.Name).Description("The name of the Restaurant");
            Field(x => x.Menus, type: typeof(ListGraphType<MenuType>)).Description("Restaurant Menus");
        }
    }
}
