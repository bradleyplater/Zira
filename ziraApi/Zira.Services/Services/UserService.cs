using System.Threading.Tasks;
using Zira.Core.Models;
using Zira.Core.Repositories;
using Zira.Services.Helpers;

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
            return await _userRepository.FindUserByEmailAsync(email);
        }

        public async Task<User> CreateUser(User user)
        {
            user.Email = user.Email.ToLower();
            user.ReadableId = $"{user.FirstName.Substring(0, 1)}{user.Surname.Substring(0, 1)}-{ServiceHelper.GenerateRandomId().ToString()}";
            var createdUser = GetUserByEmailAsync(user.Email);
            if(createdUser.Result != null)
            {
                return null;
            }
            _userRepository.InsertUser(user);
            return await createdUser;
        }
    }
}
