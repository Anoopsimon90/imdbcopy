using IMDBApp.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace IMDBApp
{
    public class MoviesService : IMoviesService
    {
        public List<string> Search(string movieName)
        {
            var results= File.ReadAllText(@"Files/Movies.txt").Split(new char[] { '\r','\n'}).ToList();

            return results.Where(x => x.Contains(movieName, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public MovieDetails GetMovieDetails(string movieId)
        {
            return new MovieDetails
            {
                Country="India",
                Genre="Drama",
                Id=1,
                Language="Malayalam",
                Name="Maheshinte Prathikaram",
                Year  =2015
            };
        }
       
    }
}
