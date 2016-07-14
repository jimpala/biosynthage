import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Menu from './Menu.jsx'
import MemberProfile from './MemberProfile.jsx';
import MemberDescription from './MemberDescription.jsx';

const styles = {
  teamPageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    width: '100vw',
    zIndex: 100
  },
  shaderDiv: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  teamPageBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '82.5%',
    height: '22vw',
    fontFamily: 'Open Sans',
    backgroundColor: 'white'
  },
  memberGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '82.5%'
  },
  displayImage: {
    position: 'relative',
    width: '100%',
    height: '60%',
  },
}

const members = {
  row1: [
    {
      image: "http://2016.igem.org/wiki/images/thumb/a/a2/Ucligem_michelle.jpg/1200px-Ucligem_michelle.jpg",
      name: "MICHELLE",
      role: "CSS DEVELOPER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac metus a felis faucibus porttitor. Quisque posuere quam ut ipsum gravida, sit amet feugiat enim lobortis. Suspendisse id convallis elit, quis tincidunt sem. Suspendisse potenti. Curabitur nisi lorem, vulputate id quam id, semper pharetra risus"
    },
    {
      image: "http://2016.igem.org/wiki/images/4/47/Ucligem_amandeep.jpg",
      name: "AMANDEEP",
      role: "CSS Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac metus a felis faucibus porttitor. Quisque posuere quam ut ipsum gravida, sit amet feugiat enim lobortis. Suspendisse id convallis elit, quis tincidunt sem. Suspendisse potenti. Curabitur nisi lorem, vulputate id quam id, semper pharetra risus"
    },
    {
      image: "http://2016.igem.org/wiki/images/8/87/Ucligem_Abbie.jpg",
      name: "ABBIE",
      role: "CSS Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac metus a felis faucibus porttitor. Quisque posuere quam ut ipsum gravida, sit amet feugiat enim lobortis. Suspendisse id convallis elit, quis tincidunt sem. Suspendisse potenti. Curabitur nisi lorem, vulputate id quam id, semper pharetra risus"
    },
  ],
  row2: [
    {
      image: "http://2016.igem.org/wiki/images/c/c6/Ucligem_dale.jpg",
      name: "DALE",
      role: "CSS DEVELOPER"
    },
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
  constructor(props) {
    super(props);

    this.state = {
      highlightedMember: null,

      displayImage: {
        position: 'relative',
        width: '100%',
        height: '60%',
        background: 'red'
      },
      name: '',
      role: ''
    };

    this.highlightMember = this.highlightMember.bind(this);
    this.hideHighlight = this.hideHighlight.bind(this);
    this.rowToMemberGrid = this.rowToMemberGrid.bind(this);
    this.memberToMemberProfile = this.memberToMemberProfile.bind(this);
  }

  highlightMember(highlightedMember) {
    //e.preventDefault();
    //$('#shaderDiv').show();
    //$('#memberProfile').show();

    //this.setState({
    //
    //  name: e.target.firstChild.firstChild.innerHTML,
    //  role: e.target.firstChild.firstChild.nextSibling.innerHTML,
    //  description: e.target.firstChild.firstChild.nextSibling.nextSibling.innerHTML
    //})

    console.log('highlighting member', highlightedMember);
    this.setState({highlightedMember});
  }

  hideHighlight() {
    console.log('hiding the highlight');
    this.setState({
      highlightedMember: null,
    });

    //$('#shaderDiv').hide();
    //$('#memberProfile').hide();
  }

  memberToMemberProfile(member, key) {
    return <MemberProfile key={key}
      image={member.image}
      name={member.name}
      role={member.role}
      description={member.description}
      memberShow={() => this.highlightMember(member)}/>
  }

  rowToMemberGrid(members, key) {
    return <div key={key}
      style={styles.memberGrid}>
      {members.map(this.memberToMemberProfile)})}
    </div>
  }

  getOverlay(highlightedMember) {
    console.log('getOverlay for member', highlightedMember.name);

    return (
        <div style={{
          ...styles.shaderDiv,
        }}
          onClick={this.hideHighlight}>

          <MemberDescription image={highlightedMember.image}
            name={highlightedMember.name}
            role={highlightedMember.role}
            description={highlightedMember.description}/>
        </div>
    );
  }

  render() {
    return (
      <div style={styles.teamPageContainer}>
        <Menu/>

        {this.state.highlightedMember == null
          ? ''
          : this.getOverlay(this.state.highlightedMember)}

        <div style={styles.teamPageBanner}>
          <h1>Meet Our Team</h1>
        </div>

        {[members.row1, members.row2, members.row1].map(this.rowToMemberGrid)}
      </div>
    )
  }
}
