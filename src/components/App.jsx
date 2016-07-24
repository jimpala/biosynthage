/*
 App.jsx
 --------------------
 --------------------
 Components used:
 - Menu
 - LandingPage
 */

import React from 'react';
import Menu from './Menu.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <Menu className="cinema"/>
                {this.props.children}
            </div>
        )
    }
}
