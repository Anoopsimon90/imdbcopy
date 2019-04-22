import React, { Component } from "react";

export default class Movies extends Component {
  state = {
    urls: [
      {image:'http://static.sify.com/cms/image/uyare-1-tc2k29djgdeif.jpg',name:'Uyare'},
      {image:'https://i.pinimg.com/originals/12/c0/2c/12c02cff22cf3a87574e237144160bde.jpg',name:'Maheshinte Prathikaram'},
      {image:'https://i.pinimg.com/originals/28/98/aa/2898aa9249637c3d08b02305fad3b9a2.jpg',name:'Mili'},
      {image:'https://i.pinimg.com/originals/a2/22/2d/a2222d657604458d9698b7425188a705.jpg',name:'Kamuki'},
      {image:'https://www.nettv4u.com/uploads/12-04-2017/sakhavu-malayalam-movie-posters-and-stills-5.jpg',name:'Sakhavu'},
      {image:'https://i.pinimg.com/originals/76/e9/3d/76e93d852778c8c1a6e303de310f7896.jpg',name:'Vetta'},
      {image:'https://pbs.twimg.com/media/DTbabPlVoAAqb48.jpg',name:'Ira'},
      {image:'https://i.pinimg.com/736x/1b/34/6f/1b346f55dda253316a16e0ffcecc56e3.jpg',name:'Mayanadhi'},
      {image:'http://www.musicaloud.com/wp-content/uploads/2013/07/Buddy-Malayalam-Movie-Poster-2013.jpg',name:'Buddy'},
      {image:'https://m.media-amazon.com/images/M/MV5BODVmYzNmYzYtNTljZC00ODg3LWEzOTQtZjA5NmVhMTczOGE1XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg',name:'Joseph'},
      {image:'http://2.bp.blogspot.com/-aw2bRrspj_Y/UFyBtnfIM-I/AAAAAAAABW0/aDFWeljSdBQ/s1600/theevram+poster4.jpg',name:'Theevram'},
      {image:'https://www.cineworld.co.uk/xmedia-cw/repo/feats/posters/HO00004712-md.jpg',name:'Thondimuthal'},
      {image:'https://pro2-bar-s3-cdn-cf3.myportfolio.com/9dbe941c05af5d6caa7f7a9053367cb7/eca9aca40d7490a9c3da9e010bd592eff075f2d532d74212b50ca5063dccca7d30319c4884fadcc7_rw_1200.png?h=17b2d3bd875850b38286af2e675c1f23',name:'Kammattippadam'}
     

    ]
  };
  constructor() {
    super();
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
      <div>{this.state.urls.map(urls => this.renderImage(urls))}</div>
    );
  }
  render() {
    return (
    <div className="container">
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-sm"> {this.populatemovies()} </div>
      </div>
    </div>);
  }
}
