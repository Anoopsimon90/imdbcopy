import React, { Component } from "react";
import MovieThumbnails from "./common";
class Celebreties extends Component {
 constructor(props)
 {
   super(props);
   this.state = {
    celebs: []
  };
 }
  componentDidMount() {
    fetch("http://localhost:3001/celebs")
      .then(response => response.json())
      .then(result => {
        this.setState({
          celebs: result
        });
      });
  }

  renderCard(celebs) {
    return (
      <div
        class="card mb-3"
        style={{ maxWidth: 840, maxHeight: 600, padding: 10, margin: 50 }}
      >
        <div class="row no-gutters" style={{ width: 800 }}>
          <div class="col-md-4">
            <img
              src={celebs.photo}
              class="card-img"
              alt="..."
              style={{ height: 250 }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{celebs.name}</h5>
              <p class="card-text">{celebs.description}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  populateActors() {
    return (
      <div>{this.state.celebs.map(celebs => this.renderCard(celebs))}</div>
    );
  }
  render() {
    return (
      <div class="container">
        <div class="row equal">
          <div class="col-sm-4 d-flex pb-3">
            <div>{this.populateActors()}</div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Celebreties;
