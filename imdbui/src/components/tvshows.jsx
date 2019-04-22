import React, { Component } from 'react';   
class TVShows extends Component {

        state = {
            urls: [
              {image:'https://imgc.allpostersimages.com/img/print/u-g-F4RTW50.jpg?w=300&h=450',name:'Game Of Thrones'},
              {image:'https://images-na.ssl-images-amazon.com/images/I/918fmG39tOL._SY606_.jpg',name:'Bates Motel'},
              {image:'http://s.ecrater.com/stores/429902/5b43584c3528d_429902b.jpg',name:'Friends'},
              {image:'https://mypostercollection.com/wp-content/uploads/2018/04/HIMYM-all-cast-poster.jpg',name:'How I Met your mother'},
              {image:'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_.jpg',name:'House Of Cards'},
              {image:'https://cf4.s3.souqcdn.com/item/2017/10/08/24/64/74/03/item_XL_24647403_37594559.jpg',name:'Big Bang Theory'},
              {image:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Uppum_Mulakum.jpg',name:'Uppum Mulakum'},
              {image:'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Jane_the_Virgin_season_4_poster.jpg/220px-Jane_the_Virgin_season_4_poster.jpg',name:'Jane The Virgin'}


              
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
 
export default TVShows;