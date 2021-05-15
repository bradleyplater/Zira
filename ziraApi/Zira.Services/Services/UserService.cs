using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Models;
using Zira.Core.Repositories;

namespace Zira.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository<User> _userRepository;

        public UserService(IUserRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _userRepository.FindByEmailAsync(email);
        }
    }
}
