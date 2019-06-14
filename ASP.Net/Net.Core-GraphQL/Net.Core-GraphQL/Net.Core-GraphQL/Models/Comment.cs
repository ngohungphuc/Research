using System.ComponentModel.DataAnnotations.Schema;

namespace Net.Core_GraphQL.Models
{
    public class Comment
    {
        [ForeignKey("PostId")]
        public Post Post { get; set; }
        public int PostId { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Body { get; set; }
    }
}
