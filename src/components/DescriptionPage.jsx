/*
 DescriptionPage.jsx
 --------------------
 PAGE
 --------------------
 Components used:

 */

import React from 'react';
import Menu from './Menu.jsx';
import ImageArray from './ImageArray.jsx'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  overviewText: {
    fontSize: '400%',
    padding: '0 0 2% 0',
    fontFamily: 'Satisfy'
  },
  paragraphText: {
    width: '50%',
    textAlign: 'center',
    padding: '2% 0 0 0',
    borderTop: "2px solid black",
    fontFamily: "Raleway"
  }
}

const imageArrayData = {
  imageData: [
    {image1: "http://2015.igem.org/wiki/images/a/a5/UCLFRONTBLOCK_1_2015.png", text: "This is some text."},
    {image1: "http://2015.igem.org/wiki/images/a/a6/UCL_MG_1643_2.jpg", text: "This is some more text."}
  ]
}

export default class DescriptionPage extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <div className="description-background" style={styles.container}>
          <div style={styles.container}>
            <h1 className="display-1" style={styles.overviewText}>Overview</h1>
            <p className="lead justify" style={styles.paragraphText}>We bring to iGEM the concept of psychobiotics and
              how we can potentially use them to
              fight
              the rising issue of mental health disorders in the modern world </p>
            <ImageArray imageArrayData={imageArrayData}/>
            <ImageArray imageArrayData={imageArrayData}/>
          </div>
        </div>
      </div>
    )
  }
}
