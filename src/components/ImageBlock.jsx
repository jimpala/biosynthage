import React from 'react';

const styles = {
  imageBlock: {
    position: 'relative',
  },

  imageBlockTextOverlay: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0
  },

  text: {
    position: 'relative',
  },

  imageAnchor: {
    color: 'transparent'
  }
}

export default class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    styles.imageBlock.width = this.props.width;
    styles.imageBlock.height = this.props.height;
    styles.imageBlock.background = 'url("' + this.props.imageData.image + '") center center';
    styles.imageBlock.backgroundSize = 'cover';
    styles.imageBlock.overflow = 'hidden';

    styles.imageBlockTextOverlay.width = this.props.width;
    styles.imageBlockTextOverlay.height = this.props.height;
  }

  imageMouseEnter(e) {
    console.log(e.target.id);
    const $image = $('#' + e.target.id);

    $image.animate({
      opacity: 0.75
    }, 500);

    e.target.firstChild.innerHTML = this.props.imageData.text;
    e.target.firstChild.style.color = '#FFFFFF';
  }

  imageMouseLeave(e) {
    const $image = $('#' + e.target.id);

    $image.animate({
      opacity: 0
    }, 500);

    e.target.firstChild.innerHTML = this.props.imageData.text;
    e.target.firstChild.innerHTML = "";
  }

  render() {
    return <a href="#" style={styles.imageAnchor}>
      <div id="imageDiv" style={styles.imageBlock}>
        <div id={this.props.id} style={styles.imageBlockTextOverlay} onMouseEnter={this.imageMouseEnter.bind(this)}
             onMouseLeave={this.imageMouseLeave.bind(this)}>
          <p className="lead" style={styles.text}></p>
        </div>
      </div>
    </a>
  }
}
