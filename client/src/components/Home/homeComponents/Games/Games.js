import React, { Component } from 'react';


class Games extends Component {
    render () {
      return (
       <div>
           <div class='container-fluid'>
                <div class='row'>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                        <a href='https://square-enix-games.com/en_US/games/dragon-quest-xi'><img src='./images/dragonQuest.jpg' alt='dragonQuest' class='gameImage' /></a>
                    </div>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                        <a href='https://justcause.square-enix-games.com/en-us/?_ga=2.228169565.1331685373.1553552600-220363435.1549701352'><img src='./images/justCause4.jpg' alt='justCause4' class='gameImage'  /></a>
                    </div>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                        <a href='https://tombraider.square-enix-games.com/en-us/?_ga=2.258602698.1331685373.1553552600-220363435.1549701352'><img src='./images/tombRaider.jpg' alt='tombRaider' class='gameImage' /></a>
                    </div>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                       <a href='https://square-enix-games.com/en_US/games/dissidia-final-fantasy-nt'><img src='./images/dissidia.jpg' alt='dissidia' class='gameImage' /></a>
                    </div>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                        <a href='https://square-enix-games.com/en_US/games/final-fantasy-xiv-online'><img src='./images/stormBlood.jpg' alt='stormBlood' class='gameImage' /></a>
                    </div>
                    <div class='col-sm-4 container2 float GameImagesResponsive'>
                        <a href='https://www.kingdomhearts.com/3/us/home/'><img src='./images/kingdomHearts.jpg' alt='kingdomHearts' class='gameImage' /></a>
                    </div>
                </div>
            </div>
        </div> 
      )
    }
  }
  
  export default Games