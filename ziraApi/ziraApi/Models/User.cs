using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Interfaces;

namespace ziraApi.Models
{
    public class User : IUser
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
