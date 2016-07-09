import React from 'react';
import LandingPage from './LandingPage.jsx';

export default class DisplayPage extends React.Component {
  render(){
    switch (this.props.displayIndex) {
      case(0): return <LandingPage/>
    }
  }
}
