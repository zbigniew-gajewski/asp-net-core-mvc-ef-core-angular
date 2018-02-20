namespace Bau.ViewModels
{
    public class EngineerViewModel
    {
        public EngineerViewModel()
        {
            SetEngineer(
                0, 
                string.Empty, 
                string.Empty);
        }

        public int Id { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }

        public void SetEngineer(
            int id,
            string firstName,
            string lastName)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
        }
    }
}
