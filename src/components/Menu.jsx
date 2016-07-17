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
        backgroundColor: 'rgba(0, 66, 119, 0.9)',
        borderBottom: '1px solid',
        borderBottomColor: 'rgba(255, 255, 255, 0.8)',
        height: '80px',
        width: '100vw',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
    container: {
        height: '60px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerContent: {
        height: '60px',
        width: '85vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navLogo: {
        height: '50px',
        width: '200px',
        zIndex:'2000',
    },
    navLogoLink: {
        height: '50px',
        width: '200px',
        zIndex: '1000',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'Rounded Elegance',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '28px',
        margin: '0px',
        marginTop: '5px',
        textRendering: 'optimizeLegibility',
        color: 'white',
    },
    navGeneral:{
        height: '50px',
        width: '400px',
        backgroundColor: 'black',
    },
};


export default class Menu extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                <div style={styles.container}>
                    <div style={styles.headerContent}>
                        <div style={styles.navLogo}>
                            <Link to="/">
                                <div style={styles.navLogoLink}>
                                    <h1 style={styles.logoText}>BIOSYNTHAGE</h1>
                                </div>
                            </Link>
                        </div>
                        <div style={styles.navGeneral}></div>
                    </div>
                </div>
            </header>
        )
    }
}