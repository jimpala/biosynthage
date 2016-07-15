/*
 Menu.jsx
 --------------------
 ELEMENT
 --------------------
 Components used:

 */

import React from 'react';


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
        position: 'fixed',
        zIndex: 3,
        backgroundColor: 'rgba(0, 66, 119, 0.8)',
        borderBottom: '1px solid #DADFE1',
        borderBottomColor: 'rgba(255, 255, 255, 0.8)',
        opacity: 0.8,
        height: '44px',
        width: '100vw',
        paddingTop: '25px',
        paddingBottom: '25px',
    },
    container: {

    },
    headerContent: {

    },
    navLogo: {

    },
    navLogoLink: {

    },
    navLogoInner: {

    },
};

export default class Menu extends React.Component {
    render() {
        return (
            <header className="nav" style={styles.header}>
                <div className="container" style={styles.container}>
                    <div style={styles.headerContent}>
                        <div style={styles.navLogo}>
                            <a href="/" style={styles.navLogoLink}>
                                <span style={styles.navLogoInner}>
                                    <svg>

                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}