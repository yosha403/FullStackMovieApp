using FullStackIntro.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackIntro.Controllers
{
    [ApiController]
    [Route("[controller]")]

    //The API is public facing and acts 
    public class MovieController
    {
        MovieDAL db = new MovieDAL();

        [HttpGet]
        public List<Movie> GetMovies()
        {
            return db.GetMovies();
        }

        [HttpGet("get/{id}")]
        public Movie GetMovie(int id)
        {
            return db.GetMovie(id);
        }

        [HttpPost("makeNew")]
        public void PostMovie(Movie m)
        {
            db.InsertMovie(m);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteMovie(int id)
        {
            db.DeleteMovie(id);
        }

        [HttpPut("update/{id}")]
        //The movie object will come from tyhe body of the http call
        public void UpdateMovie(int id, Movie m)
        {
            Movie original = db.GetMovie(id);
            if(m.Title==null || m.Title=="")
            {
                m.Title = original.Title;
            }
            if(m.Genre==null || m.Genre=="")
            {
                m.Genre = original.Genre;
            }
            if(m.RunTime==0)
            {
                m.RunTime = original.RunTime;
            }
            if(m.Year==0)
            {
                m.Year = original.Year;
            }
            db.UpdateMovie(id, m);
        }
    }
}
