import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}


export default class BackgroundSlide extends React.Component {
  render(){
    return <div id="backgroundSlide" className="landing-background-slide" style={styles.container}>
    </div>
  }
}
