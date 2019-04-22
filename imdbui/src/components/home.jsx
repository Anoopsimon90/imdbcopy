import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  state = { redirect: true };
  render() {
    return (
      <div class="container">
        <div class="row">
        <div class="col">
        Welcome
</div>
</div>
  <div class="row">
  <div class="col">
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel" style={{height:50,width:300,margin:50}}>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10">
      <img src="https://img.reelgood.com/content/movie/81c195f7-d4b5-4c18-bae5-653dd84e8eaa/poster-780.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="10">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51rmcA-ZqHL.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

<div class="col">
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel" style={{height:50,width:300,margin:50}}>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51rmcA-ZqHL.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="10">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51rmcA-ZqHL.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
</div>



</div>
    )
  }
}

export default Home;
