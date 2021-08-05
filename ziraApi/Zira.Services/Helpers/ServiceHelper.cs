using System;
using System.Collections.Generic;
using System.Text;

namespace Zira.Services.Helpers
{
    public static class ServiceHelper
    {
        private static readonly Random rnd = new Random();
        public static string GenerateRandomId()
        {
            return rnd.Next(0, 9999).ToString();
        }
    }
}
