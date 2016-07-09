import React from 'react';
import DisplayPage from './DisplayPage.jsx';
import Menu from './Menu.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayIndex: 0
    }
  }

  render() {
    return (
      <div>
        <Menu/>
        <DisplayPage displayIndex = {this.state.displayIndex}/>
      </div>
    )
  }
}
