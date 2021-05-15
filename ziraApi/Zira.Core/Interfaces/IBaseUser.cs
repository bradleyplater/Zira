using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Interfaces
{
    public interface IBaseUser
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string Surname { get; set; }
        string Email { get; set; }
    }
}
