import React, { Component } from "react";
import MovieThumbnails from "./common";
class Celebreties extends Component {
   
  state = {
    celebs: [
      {
        name: "Brad Pitt",
        occupation: "Actor",
        nickname: "Brad",
        description: "An actor and producer known as much for his versatility as he is for his handsome face, Golden Globe-winner Brad Pitt's most widely recognized role may be Tyler Durden in Fight Club (1999)",
        photo:'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg'
      },
      {
        name: "Tom Hanks",
        occupation: "Actor",
        nickname: "Tom",
        description: "Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook. His mother's family, originally surnamed 'Fraga', was entirely Portuguese, while his father was of mostly English ancestry. ",
        photo:'https://timedotcom.files.wordpress.com/2015/02/best-actor-62.jpg'
      },
      {
        name: "Angelina Jolie",
        occupation: "Actress",
        nickname: "Angeline",
        description: "Angelina Jolie is an Academy Award-winning actress who became popular after playing the title role in the 'Lara Crof' blockbuster movies, as well as Mr. & Mrs. Smith (2005), Wanted (2008), Salt (2010) and Maleficent (2014)",
        photo:'https://www.biography.com/.image/t_share/MTIwNjA4NjMzODU4NTkwMjIw/angelina-jolie-9356782-2-raw.jpg'
      },
      {
        name: "Morgan Freeman",
        occupation: "Actor",
        nickname: "Morgan",
        description: "With an authoritative voice and calm demeanor, this ever popular American actor has grown into one of the most respected figures in modern US cinema. Morgan was born on June 1, 1937 in Memphis, Tennessee, to Mayme Edna (Revere), a teacher, and Morgan Porterfield Freeman, a barber",
        photo:'https://media.vanityfair.com/photos/5b06ef6a016c7568e478cabf/master/pass/Morgan-Freeman-Sexual-Harassment.jpg'
      }
      
      
    ]
  };

 

  renderCard(celebs) {
    return (
        <div class="card mb-3" style={{maxWidth: 840,maxHeight:600,padding:10,margin:50}}>
  <div class="row no-gutters" style={{width:800}}>
    <div class="col-md-4">
      <img src={celebs.photo} class="card-img" alt="..." style={{height:250}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{celebs.name}</h5>
        <p class="card-text">{celebs.description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

        

    );
  }
  populateActors() {
    return (
      <div >{this.state.celebs.map(celebs => this.renderCard(celebs))}</div>
    );
  }
  render() {
    return (
        <div class="container">
    <div class="row equal">
    <div class="col-sm-4 d-flex pb-3">

      <div >
          {this.populateActors()}
      </div>     
      </div>         </div>   
      </div>        


    );
  }
}

export default Celebreties;
