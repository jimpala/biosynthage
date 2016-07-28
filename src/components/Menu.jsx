/*
 Menu.jsx
 --------------------
 ELEMENT
 --------------------
 Components used:

 */

import React from 'react';
import {Link} from 'react-router';

const activeStyles = {
    navLink: {
        opacity: '0.9',
        fontWeight: 'bold',
    },
};

const nullStyle = {
    topLeft: null,
    lines: null,
};

const landingStyle = {
    topLeft: <div className="logoWrap">
        <img className="logo" id="igem" src="http://biosynthage.appspot.com/img/IgemLogoGreyIcon.png"
             alt=""/>
        <img className="logo" id="biosynth" src="http://biosynthage.appspot.com/img/Ucligem_icon.png"
             alt=""/>
        <div id="logoTextBed">
            <div id="logoTextBG">
                <h2 className="logoText">UCL iGEM</h2>
                <h2 className="logoText">Team 2016</h2>
            </div>
        </div>
    </div>,

    lines: {
        color: 'white',
        borderColor: 'white',
    },
    // normal: <div className="logoWrap">
    //     <h1>BIOSYNTHAGE</h1>
    // </div>,

};

const normalStyle = {
    topLeft: <div className="logoWrap">
        <h1 id="biosynthageText">BIOSYNTHAGE</h1>
    </div>,

    lines: {
        color: 'black',
        borderColor: 'black',
    }
};


export default class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStyle: landingStyle,
        }

        this.menuEventHandler = this.menuEventHandler.bind(this);

    }

    componentDidMount() {
        document.addEventListener('menu', this.menuEventHandler)
    }

    menuEventHandler(e) {
        console.log(e.detail);
        if (e.detail != '/') {
            this.setState({currentStyle: normalStyle});
        }

        else {
            this.setState({currentStyle: landingStyle});
        }
    }


    render() {


        return (

            <header className="slimHeader">
                <div className="navWrapper" style={this.state.currentStyle.lines}>
                    <Link to="/">
                        {this.state.currentStyle.topLeft}
                    </Link>
                    <ul className="navOptionsList">
                        <li className="navOptions" style={this.state.currentStyle.lines}><Link to="/about"
                                                                                               activeStyle={activeStyles.navLink}>About</Link>
                        </li>
                        <li className="navOptions" style={this.state.currentStyle.lines}><Link to="/team"
                                                                                               activeStyle={activeStyles.navLink}>Team</Link>
                        </li>
                        <li className="navOptions" style={this.state.currentStyle.lines}>Contact</li>
                    </ul>
                </div>
            </header>

        )
    }
}
