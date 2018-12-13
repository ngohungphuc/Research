
using System;
using System.Linq;
using GraphqlSample.Models.GraphQL;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;
using AppContext = GraphqlSample.Models.AppContext;

namespace GraphqlSample.Query
{
    public class EatMoreQuery : ObjectGraphType
    {
        public EatMoreQuery(AppContext db)
        {
            Field<RestaurantType>(
                "restaurant",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id", Description = "The ID of the restaurant." }),
                resolve: context =>
                {
                    var id = context.GetArgument<Guid?>("id");
                    var restaurant = db
                        .Restaurants
                        .Include("Menus.MenuItems")
                        .FirstOrDefault(i => i.Id == id);
                    return restaurant;
                });

            Field<ListGraphType<RestaurantType>>(
                "restaurants",
                resolve: context =>
                {
                    var restaurants = db.Restaurants.Include("Menus.MenuItems");
                    return restaurants;
                });
        }
    }
}
