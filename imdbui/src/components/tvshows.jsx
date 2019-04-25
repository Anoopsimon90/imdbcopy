import React, { Component } from "react";
class TVShows extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tvshows: []
    };
  }
  renderImage(movieDet) {
    return (
      <figure className="figure">
        <img
          src={movieDet.image}
          class="figure-img img-fluid rounded"
          alt="..."
          style={{ width: 200, height: 300, padding: 5 }}
        />
        <figcaption className="figure-caption">{movieDet.name}</figcaption>
      </figure>
    );
  }
  populateTVShows() {
    return <div>{this.state.tvshows.map(urls => this.renderImage(urls))}</div>;
  }

  componentDidMount() {
    fetch("http://localhost:3001/tvshows")
      .then(response => response.json())
      .then(result => {
        this.setState({
          tvshows: result
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ padding: "20px" }}>
          <div className="col-sm"> {this.populateTVShows()} </div>
        </div>
      </div>
    );
  }
}

export default TVShows;
