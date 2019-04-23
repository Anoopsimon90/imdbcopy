import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./home";
import Movies from "./movies";
import { Link, Route, BrowserRouter } from "react-router-dom";
import TVShows from "./tvshows";
import Celebreties from "./celebs";
export default class NavBar extends Component {
  state = {
    logo :  'http://icons.iconarchive.com/icons/martz90/circle/256/camera-icon.png'
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img
                src={this.state.logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              IMDB
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active">
                  <Link to="/">Home</Link>
                </a>
                <a className="nav-item nav-link">
                  <Link to="/movies">Movies</Link>
                </a>
                <a className="nav-item nav-link">
                  <Link to="/tvshows">TV Shows</Link>
                </a>
                <a className="nav-item nav-link">
                  <Link to="/celebs">Celebs</Link>
                </a>
              </div>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/tvshows" exact component={TVShows} />
          <Route path="/celebs" exact component={Celebreties} />

        </BrowserRouter>
      </div>
    );
  }
}
