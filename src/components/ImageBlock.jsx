import React from 'react';

const styles = {
  imageBlock: {
    position: 'relative'
  }
}

export default class ImageBlock extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    styles.imageBlock.width = this.props.width;
    styles.imageBlock.height = this.props.height;
    styles.imageBlock.background = 'url("' + this.props.image + '") center center';
    styles.imageBlock.backgroundSize = 'cover';
    styles.imageBlock.overflow = 'hidden';
  }

  render(){
    return <div style={styles.imageBlock}>

    </div>
  }
}
