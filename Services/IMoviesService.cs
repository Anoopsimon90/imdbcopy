using System.Collections.Generic;

namespace IMDBApp
{
    public interface IMoviesService
    {
        List<string> Search(string movieName);
    }
}