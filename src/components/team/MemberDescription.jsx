import React from 'react';

const styles = {
  memberProfile: {
    position: 'fixed',
    margin: 'auto',
    top: '50%',
    left: '50%',
    marginLeft: '-15vw',
    marginTop: '-20vw',
    height: '40vw',
    width: '30vw',
    backgroundColor: 'white',
    zIndex: 1001
  },

  memberImage: {
    position: 'relative',
    width: '100%',
    height: '52%',
    backgroundColor: 'red'
  },

  memberDescription: {
    position: 'relative',
    paddingLeft: '7%',
    paddingTop: '4%',
    paddingRight: '7%',
    fontFamily: 'Raleway',
  },

  nameText: {
    fontWeight: '800',
    fontSize: '1.5vw',
  },
  roleText: {
    color: 'grey',
    fontSize: '1vw',

  },
  descText: {
    fontSize: '1vw',
  }
}

export default ({image, name, role, description}) => (
  <div style={styles.memberProfile}>
    <img src={image} style={styles.memberImage}/>
    <div style={styles.memberDescription}>
      <h2 style={styles.nameText}>{name}</h2>
      <h4 style={styles.roleText}>{role}</h4>
      <h4 style={styles.descText}>{description}</h4>
    </div>
  </div>
);
