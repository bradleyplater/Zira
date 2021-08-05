using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models.Issues
{
    public abstract class IssuesDocument : IIssuesDocument
    {
        public ObjectId Id { get; set; }

        public string ReadableId { get; set; }

        public string Description { get; set; }
        public int StoryPoints { get; set; }

        public string UserId { get; set; }

        public DateTime CreatedAt => Id.CreationTime;
    }
}
