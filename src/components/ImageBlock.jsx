import React from 'react';

const styles = {
  imageBlock: {
    position: 'relative',
    color: 'transparent',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    width: '35vw',
    height: '20vw'
  },

  imageBlockTextOverlay: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35vw',
    height: '20vw',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  text: {
    position: 'relative',
    color: 'white',
    opacity: 0
  },
};

export default ({width, height, image, id, text}) => (
  <a href="#about" style={{
       ...styles.imageBlock,
       background: `url("${image}") center center`,
       backgroundSize: 'cover'
       }}
    onMouseEnter={(e)=>{
              $('#' + e.target.id).animate({
                  backgroundColor: 'rgba(0,0,0,0.75)'
              }, 500)

              $('#' + e.target.firstChild.id).animate({
                  opacity: 1
              }, 500)
          }}
    onMouseLeave={(e)=>{
      $('#' + e.target.id).animate({
                  backgroundColor: 'rgba(0,0,0,0)'
              }, 500)

              $('#' + e.target.firstChild.id).animate({
                  opacity: 0
              }, 500)
          }}>

    <div id={id} style={styles.imageBlockTextOverlay}>
      <p id={'p' + id} className="lead" style={styles.text}>{text}</p>
    </div>
  </a>
)
