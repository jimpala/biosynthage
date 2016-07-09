import React from 'react';
import BackgroundSlide from './BackgroundSlide.jsx'

export default class LandingPage extends React.Component {

  constructor(){
    super();

    this.state = {
      displaySlide: 0
    }
  }


  render() {
    return (
      <div>
        <BackgroundSlide/>
      </div>
    )
  }
}
