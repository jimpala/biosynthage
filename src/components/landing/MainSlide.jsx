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
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        WebkitFilter: 'unset',
    },
    logo: {
        height: '40%',
        paddingBottom: '1%',
        WebkitFilter: 'unset',
    },
    button: {
        backgroundColor: "rgba(0,0,0,0)",
        fontFamily: "Andale Mono",
        fontSize: "1vw",
        width: '10vw',
        border: 'solid white 5px',
        WebkitFilter: 'unset',
    }
}

/*

 */
export default class MainSlide extends React.Component {
    constructor(props) {
        super(props);

        this.buttonMouseEnter = this.buttonMouseEnter.bind(this);
        this.buttonMouseLeave = this.buttonMouseLeave.bind(this);

    }



    /*
    logoMouseEnter(e)
    -> Animates to translucency on mouse over.

    Removing these methods as button props because
    it's a stupid effect.
     */
    // logoMouseEnter(e) {
    //     const $logo = $('#' + e.target.id);
    //
    //     $logo.animate({
    //         opacity: '0.75'
    //     }, 500);
    // }
    //
    // logoMouseLeave(e) {
    //     const $logo = $('#' + e.target.id);
    //
    //     $logo.animate({
    //         opacity: '1'
    //     }, 500);
    // }

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

    render() {
        return <div id="mainSlide" style={styles.container}>
            <img id="logo" style={styles.logo}
                 src="../static/img/Ucligem_logo.png"
                 alt=""/>
            <button id="button" className="btn btn-primary" style={styles.button}

                    onMouseEnter={this.buttonMouseEnter}
                    onMouseLeave={this.buttonMouseLeave}
                    onClick={this.props.toggleOnOff}>
                LEARN MORE
            </button>
        </div>
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