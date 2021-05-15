using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Repositories;

namespace Zira.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        Task<int> CommitAsync();
    }
}
