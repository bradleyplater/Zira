using MongoDB.Bson;
using Zira.Core.Attributes;

namespace Zira.Core.Models
{
    [BsonCollection("Users")]
    public class User : UserDocument
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
    }
}
