using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Models;

namespace Zira.Core.Repositories
{
    public interface IUserRepository : IRepository<IBaseUser>
    {
        Task<IBaseUser> GetWithEmailAsync();
    }
}
