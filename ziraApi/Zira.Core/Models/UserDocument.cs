using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    public abstract class UserDocument : IUserDocument 
    {
        public ObjectId ObjectId { get; set; }

        public string Email { get; set; }

        public DateTime CreatedAt => ObjectId.CreationTime;
    }
}
