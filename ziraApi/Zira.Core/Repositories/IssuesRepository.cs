using MongoDB.Driver;
using Zira.Core.Helpers;
using Zira.Core.Models.Issues;
using Zira.Data;

namespace Zira.Core.Repositories.Issues
{
    public class IssuesRepository<TDocument> : IIssuesRepository<TDocument> where TDocument : IIssuesDocument
    {

        private readonly IMongoCollection<TDocument> _collection;

        public IssuesRepository(IMongoDbSettings settings)
        {
            var database = new MongoClient(settings.ConnectionString).GetDatabase(settings.DatabaseName);
            _collection = database.GetCollection<TDocument>(RepositoryHelper.GetCollectionName(typeof(TDocument)));
        }

        public virtual bool DocumentExistsWithReadableId(string id)
        {
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.ReadableId, id);
            if (_collection.Find(filter).SingleOrDefaultAsync().Result != null)
            {
                return true;
            }
            return false;

        }

        public virtual void InsertIssue(TDocument document)
        {
            _collection.InsertOne(document);
        }
    }
}
