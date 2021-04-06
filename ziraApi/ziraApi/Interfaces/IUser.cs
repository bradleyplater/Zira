using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ziraApi.Interfaces
{
    public interface IUser
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string Surname { get; set; }
        string Email{ get; set; }
    }
}
