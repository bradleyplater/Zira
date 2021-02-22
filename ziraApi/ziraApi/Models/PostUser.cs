using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Interfaces;

namespace ziraApi.Models
{
    public class PostUser : IUser
    {
        public string Name { get; set; }
        public string Email { get; set; }


        public bool IsValid()
        {
            return Name != null && Email != null ? true : false;
        }
    }
}
