using AutoMapper;

namespace Zira.Core.Models
{
    class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<User, UserDto>();
        }
    }
}
