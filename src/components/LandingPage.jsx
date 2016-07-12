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
import LandingPageInformation from './LandingPageInformation.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
}

export default class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      displaySlide: 0
    };
  }

  learnMore() {
    $('#mainSlide').animate({
      opacity: 0
    }, 1000, ()=> {
      this.setState({
        displaySlide: 1
      });
    })
  }

  learnLess() {
    $('#mainSlide').animate({
      opacity: 1
    }, 1000);

    $('#landingVideo').animate({
      opacity: 0
    }, 1000);

    $('#videoDiv').animate({
      opacity: 0
    }, 1000, ()=> {
      this.setState({
        displaySlide: 0
      });
    })

  }

  render() {
    return (
      <div className="landing-main-slide">
        {this.state.displaySlide == 0 ?
          <MainSlide learnMore={this.learnMore.bind(this)}/> :
          <LandingPageInformation learnLess={this.learnLess.bind(this)}/>}
      </div>
    )
  }
}
