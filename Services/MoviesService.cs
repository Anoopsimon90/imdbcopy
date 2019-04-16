using System;
using System.Collections.Generic;
using System.Linq;

namespace IMDBApp
{
    public class MoviesService : IMoviesService
    {

        public List<string> Search(string movieName)
        {
            return List().Where(x=>x.StartsWith(movieName,StringComparison.OrdinalIgnoreCase)).ToList();
        }
        private List<string> List()
        {
            return new List<string>

            {
                "App",
                "Apple",
                "Applet",
                "Application",
                "Box",
                "Border",
                "Bored"
            };
        }
    }
}
