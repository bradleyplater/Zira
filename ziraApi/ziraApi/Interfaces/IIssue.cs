using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ziraApi.Models;

namespace ziraApi.Interfaces
{
    public class IIssue
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public int StoryPoints { get; set; }
        public User User { get; set; }
    }
}
