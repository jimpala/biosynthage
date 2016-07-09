/*
LandingPage.jsx
--------------------
PAGE
--------------------
Components used:
- MainSlide
- VideoSlide
- BackgroundSlide
 */


import React from 'react';
import MainSlide from './MainSlide.jsx';
import VideoSlide from './VideoSlide.jsx';
import BackgroundSlide from './BackgroundSlide.jsx';

export default class LandingPage extends React.Component {

  scrollToVideo(){
      $('html, body').animate({
        scrollTop: $('#videoSlide').offset().top
      }, 1000);
  }

  constructor(){
    super();

    this.state = {
      displaySlide: 0
    }
  }


  render() {
    return (
      <div>
        <MainSlide scrollToVideo={this.scrollToVideo}/>
        <VideoSlide/>
        <BackgroundSlide/>
      </div>
    )
  }
}
