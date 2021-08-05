using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    public abstract class UserDocument : IUserDocument 
    {
        public ObjectId Id { get; set; }

        public string ReadableId { get; set; }
        public string Email { get; set; }

        public DateTime CreatedAt => Id.CreationTime;
    }
}
