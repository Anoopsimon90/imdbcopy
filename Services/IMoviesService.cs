using IMDBApp.Models;
using System.Collections.Generic;

namespace IMDBApp
{
    public interface IMoviesService
    {
        List<string> Search(string movieName);
        MovieDetails GetMovieDetails(string movieId);

    }
}