using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Core.Models
{
    public interface IUserDocument : IDocument
    {
        string Email { get; set; }
    }
}
