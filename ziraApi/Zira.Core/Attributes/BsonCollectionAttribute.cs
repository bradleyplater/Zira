using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Attributes
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    class BsonCollectionAttribute : Attribute
    {
        public string CollectionName { get; }
        public BsonCollectionAttribute(string collectionName)
        {
            CollectionName = collectionName;
        }
    }
}
