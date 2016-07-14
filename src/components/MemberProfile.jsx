import React from 'react';

const styles = {
  memberProfile: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },

  textDiv: {
    width: '80%',
    color: 'white',
    paddingLeft: '2%'
  },

  nameText: {

  },
  roleText: {
    fontWeight: '100'
  }
}

export default class MemberProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    styles.memberProfile.width = '' + 100 / 3 + '%';
    styles.memberProfile.height = '22vw';
    styles.memberProfile.background = 'url("' + this.props.image + '") center center';
    styles.memberProfile.backgroundSize = 'cover';
    styles.memberProfile.overflow = 'hidden';
  }

  render() {
    return <a href="#" style={styles.memberProfile}>
      <div style={styles.textDiv}>
        <h5 style={styles.nameText}>{this.props.name}</h5>
        <h5 style={styles.roleText}>{this.props.role}</h5>
      </div></a>
  }
}
