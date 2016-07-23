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

    copyDiv: {
        width: '700px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0)',

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


    }
};

/*

 */
export default class MainSlide extends React.Component {
    constructor(props) {
        super(props);

        this.buttonMouseEnter = this.buttonMouseEnter.bind(this);
        this.buttonMouseLeave = this.buttonMouseLeave.bind(this);
        this.buttonClick = this.buttonClick.bind(this);

    }

    componentDidMount() {
        const $copy1 = $('#copyLine1');
        const $copy2 = $('#copyLine2');

        function copyIn($copy) {
            $copy.css('opacity', '1');
        }

        window.setTimeout(copyIn.bind(null, $copy1), 1000);
        window.setTimeout(copyIn.bind(null, $copy2), 2000);

        // $copy1.ready(function(){
        //     console.log('yeah')
        //     $copy1.toggleClass('fadeIn');
        //     $copy2.delay(1000).toggleClass('fadeIn');
        // });
    }


    /*
     but
     */
    buttonMouseEnter(e) {
        const $button = $('#' + e.target.id);

        $button.animate({
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderColor: "white"
        }, 150);
    }

    buttonMouseLeave(e) {
        const $button = $('#' + e.target.id);

        $button.animate({
            backgroundColor: 'transparent',
            borderColor: "white"
        }, 500);
    }

    buttonClick() {

        if (this.props.first) {
            $('.landing-background').css('-webkit-filter', 'grayscale(0%)');

            // This selector should cover opacity of all children
            const $billboard_all = $('#billboardDiv');

            // oh dear... context management here.
            let that = this;

            let stateTimeout;
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
                    <div style={styles.copyDiv}>
                        <p id="copyLine1" className="copyStyle">Lacklustre establishing text will</p>
                        <p id="copyLine2" className="copyStyle">sit inside of this box.</p>
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