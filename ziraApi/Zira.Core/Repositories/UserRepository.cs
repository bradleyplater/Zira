﻿using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Attributes;
using Zira.Core.Helpers;
using Zira.Core.Models;
using Zira.Core.Models.Issues;
using Zira.Data;

namespace Zira.Core.Repositories
{
    public class UserRepository<TDocument> : IUserRepository<TDocument> where TDocument : IUserDocument
    {
        private readonly IMongoCollection<TDocument> _collection;

        public UserRepository(IMongoDbSettings settings)
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

        public virtual Task<TDocument> FindUserByEmailAsync(string email)
        {
            return Task.Run(() =>
            {
                var filter = Builders<TDocument>.Filter.Eq(doc => doc.Email, email);
                return _collection.Find(filter).SingleOrDefaultAsync();
            });
            //Create a new issues repo to stop the issue on line 50
        }

        public virtual void InsertUser(TDocument document)
        {
            _collection.InsertOne(document);
        }
    }
}
