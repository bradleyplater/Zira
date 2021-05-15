using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Models;

namespace Zira.Core.Repositories
{
    public interface IUserRepository<TDocument> where TDocument : IUserDocument
    {
        Task<TDocument> GetWithEmailAsync(string email);
    }
}
