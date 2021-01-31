using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Models;

namespace ziraApi.Data
{
    public static class TeamsDatabase
    {
        public static async Task<List<Team>> GetTeams(MySqlDatabase database)
        {
            var teams = new List<Team>();
            var cmd = database.Connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM teams";

            using (var reader = await cmd.ExecuteReaderAsync())
                while(await reader.ReadAsync())
                {
                    var team = new Team()
                    {
                        Id = reader.GetFieldValue<int>(0),
                        Name = reader.GetFieldValue<string>(1)
                    };

                    teams.Add(team);
                }
            return teams;
        }
    }
}
