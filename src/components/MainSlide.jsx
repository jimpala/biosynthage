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
        opacity: 1,
        backgroundColor: "transparent",
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
    }

    componentDidMount() {
        $('#mainSlide').animate({
            opacity: 1
        }, 1000)
    }

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
                 alt=""
                 onMouseEnter={this.logoMouseEnter.bind(this)}
                 onMouseLeave={this.logoMouseLeave.bind(this)}/>
            <button id="button" className="btn btn-primary" style={styles.button}
                    onMouseEnter={this.buttonMouseEnter.bind(this)}
                    onMouseLeave={this.buttonMouseLeave.bind(this)}
                    onClick={this.props.learnMore}>
                LEARN MORE
            </button>
        </div>
    }
}
