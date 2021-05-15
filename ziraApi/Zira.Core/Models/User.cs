namespace Zira.Core.Models
{
    class User : IBaseUser
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

    }
}
