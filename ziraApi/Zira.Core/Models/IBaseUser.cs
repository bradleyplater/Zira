namespace Zira.Core.Models
{
    public interface IBaseUser
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string Surname { get; set; }
        string Email { get; set; }
    }
}
