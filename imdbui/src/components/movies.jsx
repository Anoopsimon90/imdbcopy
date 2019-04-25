import React, { Component } from "react";

export default class Movies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      urls: []
    };
  }
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
      <div>}
      {this.state.urls.map(urls => this.renderImage(urls))}
      </div>
    );
  }


  componentDidMount() {
    fetch("http://localhost:3001/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            urls: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error:error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
    <div className="container">
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-sm"> {this.populatemovies()} </div>
      </div>
    </div>);
  }
}
}
