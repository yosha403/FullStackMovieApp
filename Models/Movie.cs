using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackIntro.Models
{
    public class Movie
    {
        [Key]
        //Primary key: unique identifier on each row of our database
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public int Year { get; set; }
        public int RunTime { get; set; }
    }
}
