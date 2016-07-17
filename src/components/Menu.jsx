/*
 Menu.jsx
 --------------------
 ELEMENT
 --------------------
 Components used:

 */

import React from 'react';
import {Link} from 'react-router';

// export default class Menu extends React.Component {
//   render(){
//     return (
//       <div className="container" style={styles.menu}>
//       <div className="navbar-header">
//         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <a className="navbar-brand" href="#">Project name</a>
//       </div>
//       <div id="navbar" className="navbar-collapse collapse">
//         <ul className="nav navbar-nav">
//           <li className="active"><a href="#">Home</a></li>
//           <li><a href="#description">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <ul className="nav navbar-nav navbar-right">
//           <li><a href="../navbar/">Default</a></li>
//           <li><a href="../navbar-static-top/">Static top</a></li>
//           <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
//         </ul>
//       </div>
//     </div>
//     )
//   }
// }

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