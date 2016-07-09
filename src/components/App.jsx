import React from 'react';
import LandingPage from './LandingPage.jsx';
import Menu from './Menu.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <LandingPage/>
      </div>
    )
  }
}
