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
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 3,
        background: 'rgba(0,0,0,0)',
        // borderBottom: '1px solid',
        // borderBottomColor: 'rgba(255, 255, 255, 0.8)',
        height: '100px',
        width: '100vw',
        // boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    container: {
        height: '100px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerContent: {
        height: '100px',
        width: '85vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navLogo: {
        height: '60px',
        width: '300px',
        zIndex: '2000',

        borderLeft: '1px solid white',
    },

    homeLink: {
        color: 'rgba(0,0,0,0)',
    },

    navLogoLink: {
        height: '60px',
        width: '300px',
        zIndex: '1000',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'flex-end',
        WebkitTransform: 'translate(0px,-3px)'


    },
    logoText: {
        fontFamily: 'Noto Sans',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '32px',
        fontStyle: 'bold',
        margin: '0px',
        marginLeft: '10px',
        textRendering: 'optimizeLegibility',
        color: 'white',
    },

    subtitleLogo: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '16px',
        marginBottom: '0px',
        marginLeft: '12px',
        textRendering: 'optimizeLegibility',
        color: 'white',
    },

    navGeneral: {
        height: '100px',
        width: '600px',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex',
        justifyContent: 'flex-end',
        /*BORDER MARKER*/
        border: '2px solid black'
    },

    navBlock: {
        height: '100px',
        width: '13vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'flex-end',

        /*BORDER MARKER*/
        border: '2px solid black'
    },

    navText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: '22px',
        fontFamily: 'Lato',
        fontWeight: '900',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',

        marginRight: '0.4vw',
        marginBottom: '5px',
    }

};


export default class Menu extends React.Component {
    render() {
        return (
            // <header style={styles.header}>
            //     <div style={styles.container}>
            //         <div style={styles.headerContent}>
            //             <div style={styles.navLogo}>
            //                 <Link activeStyle={styles.homeLink} to="/">
            //                     <div style={styles.navLogoLink}>
            //
            //                         <h1 style={styles.logoText}>BIOSYNTHAGE</h1>
            //                         <p style={styles.subtitleLogo}>UCL iGEM Team 2016</p>
            //                     </div>
            //                 </Link>
            //             </div>
            //             <div style={styles.navGeneral}>
            //                 <div style={styles.navBlock}>
            //                     <p style={styles.navText}>TEAM</p>
            //                 </div>
            //                 <div style={styles.navBlock}></div>
            //                 <div style={styles.navBlock}></div>
            //             </div>
            //         </div>
            //     </div>
            // </header>

            <header className="slimHeader">
                <div className="navWrapper">
                    <div className="logoWrap">
                        <img id="logo" src="../static/img/UCLigem_icon.png" alt=""/>
                        <h1 className="logoText">BIOSYNTHAGE</h1>
                    </div>
                    <ul className="navOptionsList">
                        <li className="navOptions">About</li>
                        <li className="navOptions">Team</li>
                        <li className="navOptions">Contact</li>
                    </ul>
                </div>
            </header>
        )
    }
}