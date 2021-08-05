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
        private readonly IMapper _mapper;
        public UsersController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UserDto>> GetUserByEmail([FromQuery] string email)
        {
            var user = _userService.GetUserByEmailAsync(email.ToLower());
            if(user.Result != null)
            {
                return Ok( _mapper.MapUserToUserDto(await user));
            } else
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("")]
        public ActionResult PostUser(User postedUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var entity = _userService.CreateUser(postedUser);

            return CreatedAtAction(nameof(GetUserByEmail), entity.Result);
        }
    }
}
