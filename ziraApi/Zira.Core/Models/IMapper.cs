using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    public interface IMapper
    {

        UserDto MapUserToUserDto(User user);

    }
}
