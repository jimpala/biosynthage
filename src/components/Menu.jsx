/*
 Menu.jsx
 --------------------
 ELEMENT
 --------------------
 Components used:

 */

import React from 'react';
import {Link} from 'react-router';

const styles = {
    navLink : {
        borderTop: 'whitesmoke solid 4px',
        fontWeight: '700',
        opacity: '1',
    },
};



export default class Menu extends React.Component {

    componentDidMount() {
        document.addEventListener('menu', this.menuEventHandler)
    }

    menuEventHandler(e) {
        if (e != '/') {
            $('.slimHeader').css('background-color', 'black');
        }
    }


    render() {

        return (

            <header className="slimHeader">
                <div className="navWrapper">
                    <div className="logoWrap">
                        <img className="logo" id="igem" src="../static/img/IgemLogoGreyIcon.png" alt=""/>
                        <img className="logo" id="biosynth" src="../static/img/UCLigem_icon.png" alt=""/>
                        <div id="logoTextBed">
                            <h2 className="logoText">UCL iGEM</h2>
                            <h2 className="logoText">Team 2016</h2>
                        </div>
                    </div>
                    <ul className="navOptionsList">
                        <li className="navOptions"><Link to="/about" activeStyle={styles.navLink}>About</Link></li>
                        <li className="navOptions">Team</li>
                        <li className="navOptions">Contact</li>
                    </ul>
                </div>
            </header>

        )
    }
}
