using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Models;

namespace ziraApi.Data
{
    public static class UserDatabase
    {
        public static async Task<User> GetUserByEmail(MySqlDatabase database, string email)
        {
            List<User> users = new List<User>();
            var cmd = database.Connection.CreateCommand();
            cmd.CommandText = $"SELECT * FROM users WHERE Email=@email";
            cmd.Parameters.AddWithValue("@email", email);
            using (var reader = await cmd.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    var user = new User()
                    {
                        Name = reader.GetFieldValue<string>(1),
                        Email = reader.GetFieldValue<string>(2)
                    };

                    return user;
                } else
                {
                    return null;
                }
            }
        }
    }
}
