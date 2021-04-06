using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Data;
using ziraApi.Interfaces;
using ziraApi.Models;

namespace ziraApi.Controllers
{
    [Route("api/v1/issues")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private MySqlDatabase _database { get; set; }
        public IssuesController(MySqlDatabase database)
        {
            this._database = database;
        }

        [HttpGet]
        public void GetIssues()
        {

        }

        [HttpPost]
        [Route("")]
        public ActionResult CreateIssue(Issue postedIssue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var entity = IssuesDatabase.PostIssue(_database, postedIssue);
            return CreatedAtAction(nameof(GetIssues), postedIssue);
        }
    }
}
