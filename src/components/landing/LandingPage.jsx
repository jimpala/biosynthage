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

    masterContainer: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0)',
    },


    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export default class LandingPage extends React.Component {

    // Appends state calibration to standard Component constructor.

    constructor(props) {
        // Set 'this' characteristics by calling parent constructor.
        super(props);

        // Set binding to component instance in our constructor.
        // It needs doing, otherwise the 'this' of the method
        // shadows that of the component instance.
        // Doing this in the constructor means binding only
        // needs to occur the once.
        // Alternatively, an arrow function automatically binds the component.
        this.toggleOnOff = this.toggleOnOff.bind(this);

        /*
        INITIAL STATES

        off: Learn more button available to click (not clicked)
        clickOne:
        */
        this.state = {
            off: true,
            clickOne: true,
            clickTwo: true
        };



        this.menuDispatch();
    }

    componentDidMount() {

        let $logo = $('.logo');
        $logo.css('-webkit-filter', 'grayscale(100%)');
    }

    componentWillUnmount(){

        // Un-grayscale upon exit.

        let $logo = $('.logo');

        $logo.css('-webkit-filter', 'grayscale(0%)');
    }

    menuDispatch() {
        let menuEvent = new CustomEvent('menu', {activeRoute: this.props.location.pathname});
        document.dispatchEvent(menuEvent);
    }

    toggleOnOff() {

        // Set clickTwo false if clickOne false.
        if (!this.state.clickOne) {
            this.setState({clickTwo: false})
        }

        // Set clickOne false.
        this.setState({clickOne: false});

        // Change on<->off state.
        this.setState({off: !this.state.off});
    }



    render() {



        // Key dependent on state.
        var text = this.state.off ? "OFF" : "ON";

        return (

            <div style={styles.masterContainer}>
                <div id="landingBackground" className="landing-content-container">
                    {/*[1]*/}
                    {this.state.off ?
                        <MainSlide key={text} toggleOnOff={this.toggleOnOff} first={this.state.clickOne}/> :
                        <LandingPageInformation key={text} toggleOnOff={this.toggleOnOff} second={this.state.clickTwo}/>}
                </div>
                <div className="landing-background"></div>
            </div>
        )
    }
}

/*
 ---NOTES---

 [1]
 Ternary expression for displaySlide state here as React style discourages
 explicit control flow.
 Here we switch between rendering of <MainSlide> and <LandingPageInformation>

 */