import React, { Component } from 'react';
import Carousel from './homeComponents/Carousel/Carousel';
import Games from './homeComponents/Games/Games';
import MoreGames from './homeComponents/moreGames/moreGames';
import News from './homeComponents/News/News';
import SocialFeed from './homeComponents/SocialFeed/SocialFeed';
import Connect from './homeComponents/Connect/Connect';
import Footer from './homeComponents/Footer/Footer';



class Home extends Component {
  render () {
    return (
    <div>
        <Carousel />
        <Games />
        <MoreGames />
        <News />
        <SocialFeed />
        <Connect />
        <Footer />
    </div>
    )
  }
}

export default Home
