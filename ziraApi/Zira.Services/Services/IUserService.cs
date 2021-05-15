using System.Threading.Tasks;
using Zira.Core.Models;

namespace Zira.Services.Services
{
    public interface IUserService
    {
        Task<IBaseUser> GetUserByEmail(string email);
    }
}
