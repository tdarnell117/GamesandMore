import React, { Component } from 'react';
import Carousel from './homeComponents/Carousel/Carousel';
import Games from './homeComponents/Games/Games';
import MoreGames from './homeComponents/moreGames/moreGames';
import News from './homeComponents/News/News';



class Home extends Component {
  render () {
    return (
    <div>
        <Carousel />
        <Games />
        <MoreGames />
        <News />
    </div>
    )
  }
}

export default Home
