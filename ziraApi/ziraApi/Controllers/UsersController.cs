using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ziraApi.Data;
using ziraApi.Interfaces;

namespace ziraApi.Controllers
{
    [Route("api/v1/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private MySqlDatabase _mySqlDatabase { get; set; }

        public UsersController(MySqlDatabase mySqlDatabase)
        {
            this._mySqlDatabase = mySqlDatabase;
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IUser>> GetUsers(string email)
        {
            var user = UserDatabase.GetUserByEmail(_mySqlDatabase, email);
            if (user != null)
            {
                return Ok(await user);

            }
            else
            {
                return NotFound();
            }
        }
    }
}
