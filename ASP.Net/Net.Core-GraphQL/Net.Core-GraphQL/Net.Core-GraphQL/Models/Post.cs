using System.ComponentModel.DataAnnotations.Schema;

namespace Net.Core_GraphQL.Models
{
    public class Post
    {
        public int UserId { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
