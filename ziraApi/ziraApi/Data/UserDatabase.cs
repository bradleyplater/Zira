using System.Collections.Generic;
using System.Threading.Tasks;
using ziraApi.Interfaces;
using ziraApi.Models;

namespace ziraApi.Data
{
    public static class UserDatabase
    {
        public static async Task<User> GetUserByEmail(MySqlDatabase database, string email)
        {
            var cmd = database.Connection.CreateCommand();
            cmd.CommandText = $"SELECT * FROM zira.users " +
            "LEFT OUTER JOIN zira.issues ON zira.users.idusers = zira.issues.idusers " +
            "Where Email=@email; ";

            cmd.Parameters.AddWithValue("@email", email);
            using (var reader = await cmd.ExecuteReaderAsync())
            {
                var user = new User();
                user.Issues = new List<Issue>();
                while (await reader.ReadAsync())
                {
                    if(user.Id == 0)
                    {
                        user.Id = reader.GetFieldValue<int>(0);
                        user.FirstName = reader.GetFieldValue<string>(1);
                        user.Surname = reader.GetFieldValue<string>(2);
                        user.Email = reader.GetFieldValue<string>(3);
                    }
                    try
                    {
                        user.Issues.Add(new Issue()
                        {
                            Id = reader.GetFieldValue<int>(4),
                            Title = reader.GetFieldValue<string>(5),
                            Description = reader.GetFieldValue<string>(6),
                            Type = reader.GetFieldValue<string>(7),
                            StoryPoints = reader.GetFieldValue<int>(8),
                        });
                    }
                    catch
                    {
                        break;
                    }
                      
                }
                return user.Id == 0 ? null :  user;
            }
        }

        public static async Task<IUser> PostUser(MySqlDatabase database, IUser postedUser)
        {
            var user = await GetUserByEmail(database, postedUser.Email);
            if(user == null)
            {
                var cmd = database.Connection.CreateCommand();
                cmd.CommandText = "INSERT INTO users (FirstName, Surname, Email) VALUES(@firstName, @Surname,@email)";
                cmd.Parameters.AddWithValue("@firstName", postedUser.FirstName);
                cmd.Parameters.AddWithValue("@Surname", postedUser.Surname);
                cmd.Parameters.AddWithValue("@email", postedUser.Email);
                cmd.ExecuteNonQuery();
                return postedUser;
            }
            return null;
            
        }
    }
}
