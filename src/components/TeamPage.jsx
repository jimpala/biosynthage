import React from 'react';
import Menu from './Menu.jsx'
import ImageArray from './ImageArray.jsx';

const styles = {
  h1: {
    color: 'black'
  },
  memberGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const members = {
  row1: [
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"}
  ],
  row2: [
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"}
  ],
  row3: [
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"},
    {image1: "https://shrouded-spire-94078.herokuapp.com/img/img_cameron.png", text: "text"}
  ]
}

export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <Menu/>


        <div style={styles.memberGrid}>
          <ImageArray imageArrayData={members.row1}/>
          <ImageArray imageArrayData={members.row2}/>
          <ImageArray imageArrayData={members.row3}/>
        </div>
      </div>
    )
  }
}
