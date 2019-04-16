using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMDBApp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        [HttpGet("{movie}")]
        public List<string> Get(string movie)
        {
            IMoviesService movies = new MoviesService();
            return movies.Search(movie);
        }
    }
}