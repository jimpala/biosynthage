import React from 'react';
import ImageBlock from './ImageBlock.jsx'

const styles = {
  imageArray: {
    display: 'flex',
    width: '73vw',
    paddingTop: '5vh',
    flexDirection: 'row',
    justifyContent: "space-between"
  }
}

export default class ImageArray extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.imageArray}>
        {this.props.imageArrayData.map((imageData)=>{
            return <ImageBlock id={(Math.round(Math.random()*1E12)).toString()} imageData={imageData} width="15vw" height="15vw"/>
        })}
      </div>
    )
  }
}
