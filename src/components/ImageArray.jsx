import React from 'react';
import ImageBlock from './ImageBlock.jsx'

const styles = {
  imageArray: {
    display: 'flex',
    width: '75vw',
    paddingBottom: '5vh',
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
        {this.props.images.map(image=> {
           return <ImageBlock image={image} width="35vw" height="20vw"/>
        })}

      </div>
    )
  }
}
