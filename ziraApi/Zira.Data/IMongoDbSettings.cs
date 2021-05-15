using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Data
{
    public interface IMongoDbSettings
    {
        string DatabaseName { get; set; }
        string ConnectionString { get; set; }
    }
}
