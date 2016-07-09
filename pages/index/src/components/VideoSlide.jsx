import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF2F8'
  }
}


export default class VideoSlide extends React.Component {
  render(){
    return <div id="videoSlide" className="landing-video-slide" style={styles.container}>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/IFfLCuHSZ-U" frameborder="0" allowfullscreen></iframe>
    </div>
  }
}
