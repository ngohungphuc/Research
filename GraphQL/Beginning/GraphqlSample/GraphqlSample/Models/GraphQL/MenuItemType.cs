using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace GraphqlSample.Models.GraphQL
{
    public class MenuItemType : ObjectGraphType<MenuItem>
    {
        public MenuItemType()
        {
            Name = "MenuItem";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the item.");
            Field(x => x.Name).Description("The name of the item");
            Field(x => x.Description).Description("The description of the item");
            Field(x => x.Price).Description("The price of the item");
            Field(x => x.SuitableForVegetarian).Description("Is this suitable for vegetarian?");
        }
    }
}
