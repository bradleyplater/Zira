using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    public class Mapper : IMapper
    {
        public UserDto MapUserToUserDto(User user)
        {
            return new UserDto
            {
                Email = user.Email,
                FirstName = user.FirstName,
                Surname = user.Surname
            };
        }
    }
}
