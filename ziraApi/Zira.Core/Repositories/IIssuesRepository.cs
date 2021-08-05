using Zira.Core.Models.Issues;

namespace Zira.Core.Repositories.Issues
{
    public interface IIssuesRepository<TDocument> where TDocument : IIssuesDocument
    {
        void InsertIssue(TDocument issue);

        bool DocumentExistsWithReadableId(string id);
    }
}
