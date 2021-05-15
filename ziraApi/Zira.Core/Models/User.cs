using MongoDB.Bson;
using Zira.Core.Attributes;

namespace Zira.Core.Models
{
    [BsonCollection("Users")]
    class User : UserDocument
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
    }
}
