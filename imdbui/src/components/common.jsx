import React, { Component } from 'react';   

class MovieThumbnails extends Component {
    state = {  }

    renderImage(movieDet) {
        return (
          <figure className="figure">
            <img src={movieDet.image} class="figure-img img-fluid rounded" alt="..." style={{width:200,height:300,padding:5}}/>
            <figcaption className="figure-caption">{movieDet.name}</figcaption>
          </figure>
        );
      }
      
      populatemovies() {
        return (
          <div>{this.state.urls.map(urls => this.renderImage(urls))}</div>
        );
      }

    render() { 
        return ( <div></div> );
    }
}
 
export default MovieThumbnails;