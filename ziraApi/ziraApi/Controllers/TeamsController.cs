﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ziraApi.Data;
using ziraApi.Models;

namespace ziraApi.Controllers
{
    [Route("api/v1/teams")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private MySqlDatabase MySqlDatabase { get; set; }
        public TeamsController(MySqlDatabase mySqlDatabase)
        {
            this.MySqlDatabase = mySqlDatabase;
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Team>>> getTeams()
        {
            var teams = TeamsDatabase.GetTeams(MySqlDatabase);
            return Ok(await teams);
        }
    }
}
