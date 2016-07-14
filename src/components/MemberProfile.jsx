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
    color: 'orange'
  },
  descText: {
    display: 'none',
  }
}

export default class MemberProfile extends React.Component {
  render() {
    return (
      <div style={{
          ...styles.memberProfile,
          background: `url("${this.props.image}") center center`,
          backgroundSize: 'cover',
        }}
        onClick={this.props.memberShow}>
        <div style={styles.textDiv}>
          <h4 style={styles.nameText}>{this.props.name}</h4>
          <h5 style={styles.roleText}>{this.props.role}</h5>
          <h5 style={styles.descText}>{this.props.description}</h5>
        </div>
      </div>
    );
  }
}
