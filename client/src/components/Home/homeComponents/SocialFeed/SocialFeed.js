import React, { Component } from 'react';



class SocialFeed extends Component {
    render () {
      return (
        <div class='container-fluid'>
            <div class='row spaceTop2'>
                <div class='col-sm-12'>
                <h4 class='newsHeader newsHeaderResponsive'>SOCIAL FEED</h4>
                </div>
            </div>
            <div class='row'>
                <div class='col-sm socialBackground'>
                    <img src="./images/masterchief.jpg" alt="masterchief" class="avatar"></img>
                    <p class='socialInfo'>We'll be going live in an hour to show you guys #FinalFantasy XV #EpisodeArdyn! Don't miss it twitch.tv/squareenix </p>
                </div>
                <div class='col-sm socialBackground'>
                    <img src="./images/masterchief.jpg" alt="masterchief" class="avatar"></img>
                    <p class='socialInfo'> We've partnered with @squareenix to celebrate the upcoming release of FINAL FANTASY® X/X-2 HD Remaster on the Nintendo Switch and Xbox One!  #FFXX2_KFT TO ENTER: 1. Follow @kfteausa & @finalfantasy 2. Visit bit.ly/FFXX2xKFT & complete the form</p>
                </div>
                <div class='col-sm socialBackground'>
                    <img src="./images/masterchief.jpg" alt="masterchief" class="avatar"></img>
                    <p class='socialInfo'>Tonight, the dreams of the blood royal… come to an end. #FinalFantasy XV #EpisodeArdyn is OUT NOW!</p>
                </div>
                <div class='col-sm socialBackground'>
                    <img src="./images/masterchief.jpg" alt="masterchief" class="avatar"></img>
                    <p class='socialInfo'>The original #FinalFantasy VII is available now for #NintendoSwitch. Now’s your chance to take a stab at the RPG classic at home or on the go!</p>
                </div>
            </div>
            <div class='row space spaceTop'>
                <div class='col-sm-12 text-center'>
                    <a class='viewMoreBtn viewMoreBtnResponsive' href='https://square-enix-games.com/en_US/social' >VIEW MORE</a>
                </div>
            </div>
        </div>
      )
    }
  }
 
  
  export default SocialFeed;