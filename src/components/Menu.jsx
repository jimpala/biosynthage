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
        backgroundColor: 'rgba(0,0,0,0)',
        // borderBottom: '1px solid',
        // borderBottomColor: 'rgba(255, 255, 255, 0.8)',
        height: '120px',
        width: '100vw',
        // boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    container: {
        height: '120px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerContent: {
        height: '120px',
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
        height: '120px',
        width: '600px',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'flex',
        justifyContent: 'flex-end',
        /*BORDER MARKER*/
        border: '2px solid black'
    },

    navBlock: {
        height: '120px',
        width: '13vw',

        /*BORDER MARKER*/
        border: '2px solid black'
    }
};


export default class Menu extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                <div style={styles.container}>
                    <div style={styles.headerContent}>
                        <div style={styles.navLogo}>
                            <Link to="/" >
                                <div style={styles.navLogoLink}>

                                    <h1 style={styles.logoText}>BIOSYNTHAGE</h1>
                                        <p style={styles.subtitleLogo}>UCL iGEM Team 2016</p>
                                </div>
                            </Link>
                        </div>
                        <div style={styles.navGeneral}>
                            <div style={styles.navBlock}></div>
                            <div style={styles.navBlock}></div>
                            <div style={styles.navBlock}></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}