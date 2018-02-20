namespace Bau.Data.Entities
{
    using Microsoft.AspNetCore.Identity;
    using System.ComponentModel.DataAnnotations;

    public class StoreUser : IdentityUser
    {
        public override string UserName { get => base.UserName; set => base.UserName = value; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
