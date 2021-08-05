using Zira.Core.Attributes;

namespace Zira.Core.Models.Issues
{
    [BsonCollection("Issues")]
    public class Issue : IssuesDocument
    {
        public string Title { get; set; }
        public string IssueType { get; set; }
    }
}
