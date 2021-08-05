using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models.Issues
{
    public interface IIssuesDocument : IDocument
    {
        string Description { get; set; }
        int StoryPoints { get; set; }

        string UserId { get; set; }
    }
}
