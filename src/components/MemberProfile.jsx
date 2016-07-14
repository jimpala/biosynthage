import React from 'react';

const styles = {
  memberProfile: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    color: 'transparent',
    width: `${100 / 3}%`,
    height: '22vw',
    overflow: 'hidden',
  },

  textDiv: {
    width: '80%',
    color: 'white',
    paddingLeft: '2%'
  },

  nameText: {},
  roleText: {
    fontWeight: '100',
    color: 'white'
  },
  descText: {
    display: 'none',
  }
};

export default ({image, name, role, description, onClick}) => (
  <div style={{
          ...styles.memberProfile,
          background: `url("${image}") center center`,
          backgroundSize: 'cover',
        }}
    onClick={onClick}>
    <div style={styles.textDiv}>
      <h4 style={styles.nameText}>{name}</h4>
      <h5 style={styles.roleText}>{role}</h5>
      <h5 style={styles.descText}>{description}</h5>
    </div>
  </div>
);
