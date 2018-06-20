using System.ComponentModel.DataAnnotations;

namespace MultiTenant.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}