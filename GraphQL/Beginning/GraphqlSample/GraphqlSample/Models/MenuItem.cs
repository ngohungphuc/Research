using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraphqlSample.Models
{
    public class MenuItem
    {
        public Guid Id { get; set; }
        public Guid MenuId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool SuitableForVegetarian { get; set; }
    }
}
