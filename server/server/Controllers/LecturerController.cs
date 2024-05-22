using Microsoft.AspNetCore.Mvc;
using server.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        public static List<Lecturer> lecturers = new List<Lecturer> {
            new Lecturer("Adina","aaa","adina@gmail.com","000001"),
            new Lecturer("Batya", "bbb", "batya@gmail.com", "000002"),
            new Lecturer("Chava", "ccc", "chava@gmail.com", "000003"), 
            new Lecturer("Dina", "ddd", "dina@gmail.com", "000004"),
            new Lecturer("Efrat", "eee", "efrat@gmail.com", "000005"),
            new Lecturer("Frida", "fff", "frida@gmail.com", "000006"),
            new Lecturer("Gila", "ggg", "gila@gmail.com", "000007"),
            new Lecturer("Hadas", "hhh", "hadas@gmail.com", "000008"),
            new Lecturer("I", "iii", "i@gmail.com", "000009"),
            new Lecturer("Judi", "jjj", "judi@gmail.com", "000010"),
            new Lecturer("Keli", "kkk", "keli@gmail.com", "000011"),
            new Lecturer("Leah", "lll", "leah@gmail.com", "000012"),
            new Lecturer("Mina", "mmm", "mina@gmail.com", "000013"),
            new Lecturer("Noa", "nnn", "noa@gmail.com", "000014"),
            new Lecturer("Orah", "ooo", "orah@gmail.com", "000015"),
            new Lecturer("Pnina", "ppp", "pnina@gmail.com", "000016"),
            new Lecturer("Quin", "qqq", "quin@gmail.com", "000017"),
            new Lecturer("Ruth", "rrr", "ruth@gmail.com", "000018"),
            new Lecturer("Sara", "sss", "sara@gmail.com", "000019"),
            new Lecturer("Tova", "ttt", "tova@gmail.com", "000020"),
            new Lecturer("U", "uuu", "u@gmail.com", "000021"),
            new Lecturer("V", "vvv", "v@gmail.com", "000022"),
            new Lecturer("W", "www", "w@gmail.com", "000023"),
            new Lecturer("X", "xxx", "x@gmail.com", "000024"),
            new Lecturer("Yeudit", "yyy", "yeudit@gmail.com", "000025"),
            new Lecturer("Zelda", "zzz", "zelda@gmail.com", "000026")};
        // GET: api/<LectureController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return lecturers;
        }

        // GET api/<LectureController>/5
        [HttpGet("{id}")]
        public Lecturer Get(int id)
        {
            var lec = lecturers.Find(x => x.Id == id);
            if (lec != null)
                return lec;
            return null;
        }

        // POST api/<LectureController>
        [HttpPost]
        public void Post([FromBody] Lecturer value)
        {
            lecturers.Add(value);
        }

        // PUT api/<LectureController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Lecturer value)
        {
            var lec = lecturers.Find(x => x.Id == id);
            if (lec != null)
            {
                lec.Email = value.Email;
                lec.Address = value.Address;
                lec.Name = value.Name;
                lec.Password = value.Password;
            }

        }

        // DELETE api/<LectureController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var lec = lecturers.Find(x => x.Id == id);
            if (lec != null)
                lecturers.Remove(lec);
        }
    }
}
