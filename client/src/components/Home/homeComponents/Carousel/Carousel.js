import React, { Component } from 'react';


class Carousel extends Component {
    render () {
      return ( 
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/ff14.jpg" class="d-block w-100" alt="ff14" />
            </div>
            <div class="carousel-item">
              <img src="./images/nier.jpg" class="d-block w-100" alt="nier" />
            </div>
            <div class="carousel-item">
              <img src="./images/ff15.jpg" class="d-block w-100" alt="ff15" />
            </div>
          </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
      )
    }
  }
  
  export default Carousel
  