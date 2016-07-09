import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: '40%',
    paddingBottom: '1%'
  },
  button: {
    opacity: 1,
    backgroundColor: "#336666",
    fontFamily: "Andale Mono",
    fontSize: "120%",
    width: '10%',
    border: 'solid #336666 5px'
  }
}

export default class BackgroundSlide extends React.Component {
  logoMouseEnter(e) {
    const $logo = $('#' + e.target.id);

    $logo.animate({
      opacity: '0.75'
    }, 500);
  }

  logoMouseLeave(e) {
    const $logo = $('#' + e.target.id);

    $logo.animate({
      opacity: '1'
    }, 500);
  }

  buttonMouseEnter(e) {
    console.log("clicked");
    const $button = $('#' + e.target.id);

    $button.animate({
      backgroundColor: 'transparent',
      borderColor: "white"
    }, 150);
  }

  buttonMouseLeave(e) {
    const $button = $('#' + e.target.id);

    $button.animate({
      backgroundColor: '#336666',
      borderColor: "#336666"
    }, 500);
  }

  render(){
    return  <div className="jumbotron" style={styles.container}>
      <img id="logo" style={styles.logo}
           src="http://2015.igem.org/wiki/images/5/56/Mind_the_gut_logo_small_frontpage.png"
           alt=""
           onMouseEnter={this.logoMouseEnter.bind(this)}
           onMouseLeave={this.logoMouseLeave.bind(this)}/>
      <button id="button" className="btn btn-primary" style={styles.button}
              onMouseEnter={this.buttonMouseEnter.bind(this)}
              onMouseLeave={this.buttonMouseLeave.bind(this)}>LEARN MORE
      </button>
    </div>
  }
}
