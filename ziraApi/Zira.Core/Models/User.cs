using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public List<Issue> Issues { get; set; }
    }
}
