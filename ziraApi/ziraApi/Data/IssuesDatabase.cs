using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Interfaces;
using ziraApi.Models;

namespace ziraApi.Data
{
    public class IssuesDatabase
    {

        public static Issue PostIssue(MySqlDatabase database, Issue issue)
        {
            var cmd = database.Connection.CreateCommand();
            cmd.CommandText = "INSERT INTO issues (Title, Description, Type, StoryPoints, idusers) VALUES(@title, @description, @type, @StoryPoints, @idusers)";
            cmd.Parameters.AddWithValue("@title", issue.Title);
            cmd.Parameters.AddWithValue("@description", issue.Description);
            cmd.Parameters.AddWithValue("@type", issue.Type);
            cmd.Parameters.AddWithValue("@StoryPoints", issue.StoryPoints);
            cmd.Parameters.AddWithValue("@idusers", issue.User.Id);
            cmd.ExecuteNonQuery();
            return issue;
        }
    }
}
