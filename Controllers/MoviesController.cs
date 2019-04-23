using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMDBApp;
using IMDBApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesService movies;
        public MoviesController(IMoviesService movies)
        {
            this.movies = movies;
        }
        [HttpGet("search/{movie}")]
        public List<string> Get(string movie)
        {
            return movies.Search(movie);
        }


        [HttpGet("details/{name}")]
        public MovieDetails GetMovieDetails(string name)
        {
            return movies.GetMovieDetails(name);
        }
    }
}