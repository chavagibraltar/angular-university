namespace server.models
{
    public class Lecturer
    {
        static int index = 1;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Lecturer(string name,string address,string email,string password)
        {
            Id = index++;
            Name = name;
            Address = address;
            Email = email;
            Password = password;
        }
        public Lecturer()
        {
            
        }
    }
}
