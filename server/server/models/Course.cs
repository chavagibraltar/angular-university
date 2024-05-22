using Microsoft.OData.Edm;

namespace server.models
{
    public enum StudyMode { Frontal = 1, Digital = 2 };
    public class Course
    {
        static int index = 1;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }          
        public int CategoryId { get; set; }
        public int Amount { get; set; }
        public string StartDate { get; set; }
        public string[] Syllabus { get; set; }
        public StudyMode StudyMode { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }
        public Course(string name,string description,int catId,int amount, string startDate, string[]syllabus, StudyMode studyMode, int lecturerId,string image)
        {
            Id = index++;
            Name = name;
            Description = description;
            CategoryId = catId;
            Amount = amount;
            StartDate = startDate;
            Syllabus = syllabus;
            StudyMode = studyMode;
            LecturerId=lecturerId;
            Image = image;   
        }
        public Course()
        {
            
        }
    }
}
