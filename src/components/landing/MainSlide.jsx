/*
 MainSlide.jsx
 --------------------
 ELEMENT
 --------------------
 Components used:

 */

import React from 'react';


/*
 CSS as JS key:value object/struct.
 */
const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingTop: '60px',
    },

    billboardDiv: {
        width: '800px',
        height: '350px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '6px',

    },

    billboardAlignDiv: {
        width: '700px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0)',

    },

    copyDiv: {
        width: '700px',
        height: '142px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },


    logo: {
        height: '250px',
        paddingBottom: '1%',
        WebkitFilter: 'unset',
    },
    button: {
        backgroundColor: "rgba(0,0,0,0)",
        fontFamily: "Andale Mono",
        fontSize: "16px",

        marginTop: '35px',

        width: '160px',
        border: 'solid white 5px',
        WebkitFilter: 'unset',
    },



    logoHeadlineStyle: {
        fontFamily: 'Rounded Elegance',
    }
};

/*

 */
export default class MainSlide extends React.Component {
    constructor(props) {
        super(props);

        // Bindings.
        this.buttonMouseEnter = this.buttonMouseEnter.bind(this);
        this.buttonMouseLeave = this.buttonMouseLeave.bind(this);
        this.buttonClick = this.buttonClick.bind(this);


        // Initialise copy as state (number and content).
        this.state = {
            weAreBiosynthage: false,
            copyInjection:
                <div style={styles.copyDiv}>
                    <p id="copy1" className="copyStyle">What would you do</p>
                    <p id="copy2" className="copyStyle">with 25 more years of your life?</p>
                </div>,
        }

    }

    componentDidMount() {

        let copy1 = document.getElementById('copy1');
        let copy2 = document.getElementById('copy2');

        setTimeout(() => {
            copy1.style.opacity = 1;
        },1000);
        setTimeout(() => {
            copy2.style.opacity = 1;
        },2000);
        setTimeout(() => {
            copy1.style.opacity = 0;
            copy2.style.opacity = 0;
        },5000);
        setTimeout(()=>{
            this.setState({copyInjection:
                <div style={styles.copyDiv}>
                    <p id="copy1" className="headlineStyle">We are Biosynthage.</p>
                </div>,
                weAreBiosynthage: true,
            });
        },6500);

    }

    componentDidUpdate(){
        if (this.state.weAreBiosynthage == true) {
            let copy1 = document.getElementById('copy1');

            setTimeout(() => {
                copy1.style.opacity = 1;
            },1000);

        }
    }

    /*
    @biosynthage
    ISSUE #17
     */
    buttonMouseEnter(e) {
        const $button = $('#' + e.target.id);

        $button.animate({
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderColor: "white"
        }, 150);
    }

    /*
     @biosynthage
     ISSUE #17
     */
    buttonMouseLeave(e) {
        const $button = $('#' + e.target.id);

        $button.animate({
            backgroundColor: 'transparent',
            borderColor: "white"
        }, 500);
    }


    buttonClick() {

        if (this.props.first) {
            $('.landing-background, .logo').css('-webkit-filter', 'grayscale(0%)');

            // This selector should cover opacity of all children
            const $billboard_all = $('#billboardDiv');

            // Emergency context management (ugly I know).
            let that = this;

            let stateTimeout;

            // Would be better to use ES6 anonymous arrow functions here.
            let fadeOutTimeout = setTimeout((function () {
                $billboard_all.css('-webkit-transition', 'opacity 1.0s ease-in');
                $billboard_all.css('opacity', '0');

                stateTimeout = setTimeout((function () {
                    that.props.toggleOnOff();
                }), 1000)
            }), 1000);
        }

        else {
            this.props.toggleOnOff();
        }
    }


    render() {
        return (
            <div id="mainSlide" style={styles.container}>
                <div className="menuDivider"></div>
                <div id="billboardDiv" style={styles.billboardDiv}>
                    <div style={styles.billboardAlignDiv}>
                        {this.state.copyInjection}
                        <button id="button" className="btn btn-primary" style={styles.button}
                                onMouseEnter={this.buttonMouseEnter}
                                onMouseLeave={this.buttonMouseLeave}
                                onClick={this.buttonClick}>
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

/*
 onMouseEnter = {this.buttonMouseEnter.bind(this)}
 -> onMouseEnter event handler is set equal to a function.
 -> this.buttonMouseEnter is the buttonMouseEnter(e) method
 owned by MainSlide.
 -> .bind(this) means that this component is registered as
 the 'this' in buttonMouseEnter(e).
 -> Browsers always pass the event object as the first
 argument for the handler.
 -> An event object 'e' has an attribute .target which is
 a reference to the object (node) that dispatched it.

 */