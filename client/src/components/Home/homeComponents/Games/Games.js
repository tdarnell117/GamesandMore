import React, { Component } from 'react';


class Games extends Component {
    render () {
      return (
       <div>
           <div class='container-fluid'>
                <div class='row'>
                    <div class='column'>
                        <img src='./images/dragonQuest.jpg' alt='dragonQuest' class='item' />
                    </div>
                    <div class='column'>
                        <img src='./images/justCause4.jpg' alt='justCause4' class='item'  />
                    </div>
                    <div class='column'>
                        <img src='./images/tombRaider.jpg' alt='tombRaider' class='item' />
                    </div>
                </div>
                <div class='row'>
                    <div class='column'>
                        <img src='./images/dissidia.jpg' alt='dissidia' class='item' />
                    </div>
                    <div class='column'>
                        <img src='./images/stormBlood.jpg' alt='stormBlood' class='item' />
                    </div>
                    <div class='column'>
                        <img src='./images/kingdomHearts.jpg' alt='kingdomHearts' class='item' />
                    </div>
                </div>
            </div>
        </div> 
      )
    }
  }
  
  export default Games