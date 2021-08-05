using System.Threading.Tasks;
using Zira.Core.Models;

namespace Zira.Core.Repositories
{
    public interface IUserRepository<TDocument> where TDocument : IUserDocument
    {
        Task<TDocument> FindUserByEmailAsync(string email);
        void InsertUser(TDocument user);

        bool DocumentExistsWithReadableId(string id);
    }
}
