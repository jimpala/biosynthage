import React from 'react';

const styles = {
  h1: {
    color: '#000000',
    zIndex: 1,
    opacity: 0
  }
}

export default class LandingPageInformation extends React.Component {
  componentDidMount(){
    $('h1').animate({
      opacity: 1
    }, 1000)
  }

  render(){
    return <h1 style={styles.h1}>Information should go here.</h1>
  }
}
