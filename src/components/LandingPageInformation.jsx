import React from 'react';

const styles = {
  div: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  videoDiv: {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,1)',
    opacity: 0,
    width: '200vw',
    height: '100vh',
    zIndex: 1,
    transform: 'translate(-20%,0)',
    overflow: 'hidden'
  },
  video: {
    position: 'relative',
    zIndex: 2
  }
}

export default class LandingPageInformation extends React.Component {
  componentDidMount() {
    $('#videoDiv').animate({
      opacity: 0.75
    }, 1000)
  }

  render() {
    return <div style={styles.div}>
      <div id='videoDiv' style={styles.videoDiv}>
      </div>

      <iframe style={styles.video} width="1280" height="720" src="https://www.youtube.com/embed/IFfLCuHSZ-U"
              frameborder="0" allowfullscreen></iframe>
    </div>
  }
}
