using AutoMapper;
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
        public async Task<ActionResult<UserDto>> GetUserByEmail(string email)
        {
            var user = _userService.GetUserByEmailAsync(email.ToLower());
            if(user.Result != null)
            {
                return Ok( _mapper.Map<UserDto>(await user));
            } else
            {
                return NotFound();
            }
        }
    }
}
