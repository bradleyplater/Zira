using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zira.Core.Models;
using Zira.Services.Services;

namespace Zira.Api.Controllers
{
    [Route("api/v1/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<User>> GetUserByEmail(string email)
        {
            var user = _userService.GetUserByEmailAsync(email);
            if(user.Result != null)
            {
                return Ok(await user);
            } else
            {
                return NotFound();
            }
        }
    }
}
