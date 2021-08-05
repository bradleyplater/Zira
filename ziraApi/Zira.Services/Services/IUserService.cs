using System.Threading.Tasks;
using Zira.Core.Models;

namespace Zira.Services.Services
{
    public interface IUserService
    {
        Task<User> GetUserByEmailAsync(string email);
        Task<User> CreateUser(User user);
    }
}
