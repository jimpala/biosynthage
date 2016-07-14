import React from 'react';
import Menu from './Menu.jsx'
import MemberProfile from './MemberProfile.jsx';

const styles = {
  teamPageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw'
  },
  teamPageBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '22vw',
    fontFamily: 'Open Sans'
  },
  memberGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '82.5%'
  }
}

const members = {
  row1: [
    {
      image: "http://2016.igem.org/wiki/images/thumb/a/a2/Ucligem_michelle.jpg/1200px-Ucligem_michelle.jpg",
      name: "MICHELLE",
      role: "CSS DEVELOPER"
    },
    {image: "http://2016.igem.org/wiki/images/4/47/Ucligem_amandeep.jpg", name: "AMANDEEP", role: "CSS Developer"},
    {image: "http://2016.igem.org/wiki/images/8/87/Ucligem_Abbie.jpg", name: "ABBIE", role: "CSS Developer"},
  ],
  row2: [
    {image: "http://2016.igem.org/wiki/images/c/c6/Ucligem_dale.jpg", name: "DALE", role: "CSS DEVELOPER"},
    {
      image: "http://2016.igem.org/wiki/images/thumb/4/4f/Ucligem_yuchao.jpg/1200px-Ucligem_yuchao.jpg",
      name: "YUQIAO LIU",
      role: "CSS Developer"
    },
    {image: "http://2016.igem.org/wiki/images/7/74/Ucligem_hana.jpg", name: "HANA", role: "CSS Developer"},
  ],
  row3: [
    {
      image: "http://2016.igem.org/wiki/images/thumb/a/a2/Ucligem_michelle.jpg/1200px-Ucligem_michelle.jpg",
      name: "MICHELLE",
      role: "CSS DEVELOPER"
    },
    {image: "http://2016.igem.org/wiki/images/4/47/Ucligem_amandeep.jpg", name: "AMANDEEP", role: "CSS Developer"},
    {image: "http://2016.igem.org/wiki/images/8/87/Ucligem_Abbie.jpg", name: "ABBIE", role: "CSS Developer"},
  ],
}

export default class TeamPage extends React.Component {
  render() {
    return (
      <div style={styles.teamPageContainer}>
        <Menu/>

        <div style={styles.teamPageBanner}>
          <h1>Meet Our Team</h1>
        </div>

        <div style={styles.memberGrid}>
          {members.row1.map((member)=> {
            return <MemberProfile image={member.image} name={member.name} role={member.role}></MemberProfile>
          })}
        </div>
        <div style={styles.memberGrid}>
          {members.row2.map((member)=> {
            return <MemberProfile image={member.image} name={member.name} role={member.role}></MemberProfile>
          })}
        </div>
        <div style={styles.memberGrid}>
          {members.row1.map((member)=> {
            return <MemberProfile image={member.image} name={member.name} role={member.role}></MemberProfile>
          })}
        </div>
      </div>
    )
  }
}
