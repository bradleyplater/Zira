using System;
using System.Linq;
using Zira.Core.Attributes;

namespace Zira.Core.Helpers
{
    public static class RepositoryHelper
    {
        private static readonly Random rnd = new Random();
        public static string GenerateRandomId()
        {
            return rnd.Next(0, 9999).ToString();
        }
        public static string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                typeof(BsonCollectionAttribute),
                true)
                .FirstOrDefault())?.CollectionName;
        }
    }

}

