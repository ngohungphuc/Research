using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraphqlSample.Models
{
    public class DataSeed
    {
        public static void Run(AppContext db)
        {
            if (!db.Restaurants.Any())
            {
                db.Restaurants.Add(
                    new Restaurant
                    {
                        Id = Guid.NewGuid(),
                        Name = "Boba",
                        Menus = new[]
                        {
                            new Menu
                            {
                                Id = Guid.NewGuid(),
                                Name = "Drinks",
                                MenuItems = new[]
                                {
                                    new MenuItem
                                    {
                                        Id = Guid.NewGuid(),
                                        Name = "Cola",
                                        Description = "Our home made cola",
                                        Price = 3.5m,
                                        SuitableForVegetarian = true
                                    }
                                }
                            }
                        }
                    });
                db.SaveChanges();
            }
        }
    }
}
