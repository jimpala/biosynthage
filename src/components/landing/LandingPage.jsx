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
import MainSlide from '../MainSlide.jsx';
import LandingPageInformation from './LandingPageInformation.jsx';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export default class LandingPage extends React.Component {

    // Appends state calibration to standard Component constructor.

    constructor() {
        super();

        this.state = {
            displaySlide: 0
        };
    }

    /*
     learnMore()
     -> Fade out logo on front.
     -> Change displaySlide state to 1 upon finish.
     */
    learnMore() {
        $('#mainSlide').animate({
            opacity: 0
        }, 1000, ()=> {
            this.setState({
                displaySlide: 1
            });
        })
    }

    /*
     learnLess()
     -> Fade out landing video; fade in logo.
     -> Change displaySlide state to 0 upon finish.
     */
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

    /*
     render()

     */
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
