import React, { Component } from 'react';

class News extends Component {
    render () {
      return (
        <div class='container-fluid newsBackground'>
          <div class='row spaceTop2'>
            <div class='col-sm-12'>
              <h4 class='newsHeader newsHeaderResponsive'>NEWS</h4>
            </div>
          </div>
          <div class='row'>
              <div class='col-sm-4 colorHover'>
                <a href='https://square-enix-games.com/en_US/games/left-alive'><img src='./images/leftAlive.jpg' alt='LeftAlive' class='newsImages NewsImagesResponsive' /></a>
                <p class='newsText newsTextResponsive'>Battle for Survival in LEFT ALIVE - Out Now on PS4 and Steam</p>
              </div>
              <div class='col-sm-4 colorHover'>
                <a href='https://square-enix-games.com/en_US/games/shadow-of-the-tomb-raider'><img src='./images/tombRaider2.png' alt='TheSerpentsHeart' class='newsImages NewsImagesResponsive' /></a>
                <p class='newsText newsTextResponsive'>Shadow of the Tomb Raider's latest DLC takes you into the Serpent's Heart</p>
              </div>
              <div class='col-sm-4 colorHover'>
                <a href='https://square-enix-games.com/en_US/games/final-fantasy-x-x-2-hd-remaster'><img src='./images/ff10.jpg' alt='X-2' class='newsImages NewsImagesResponsive' /></a>
                <p class='newsText newsTextResponsive'>What's so good about...FINAL FANTASY X-2?</p>
              </div>
          </div>
          <div class='row space spaceTop'>
            <div class='col-sm-12 text-center'>
            <a class='moreNewsBtn moreNewsBtnResponsive' href='https://square-enix-games.com/en_US/news'>MORE NEWS</a>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default News