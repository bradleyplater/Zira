using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Attributes;
using Zira.Core.Models;
using Zira.Data;

namespace Zira.Core.Repositories
{
    public class UserRepository<TDocument> : IUserRepository<TDocument> where TDocument : IUserDocument
    {
        private readonly IMongoCollection<TDocument> _collection;

        public UserRepository(IMongoDbSettings settings)
        {
            var database = new MongoClient(settings.ConnectionString).GetDatabase(settings.DatabaseName);
            _collection = database.GetCollection<TDocument>(GetCollectionName(typeof(TDocument)));
        }

        private protected string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                typeof(BsonCollectionAttribute),
                true)
                .FirstOrDefault())?.CollectionName;
        }

        public virtual Task<TDocument> FindByEmailAsync(string email)
        {
            return Task.Run(() =>
            {
                var filter = Builders<TDocument>.Filter.Eq(doc => doc.Email, email);
                return _collection.Find(filter).SingleOrDefaultAsync();
            });
        }
    }
}
