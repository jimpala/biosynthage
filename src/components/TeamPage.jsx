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
    width: '200vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
    transform: 'translate(-50%,0)'
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
};

export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightedMember: null,
    };

    this.highlightMember = this.highlightMember.bind(this);
    this.hideHighlight = this.hideHighlight.bind(this);
    this.rowToMemberGrid = this.rowToMemberGrid.bind(this);
    this.memberToMemberProfile = this.memberToMemberProfile.bind(this);
  }

  highlightMember(highlightedMember) {
    this.setState({highlightedMember});
  }

  hideHighlight() {
    this.setState({highlightedMember: null});
  }

  memberToMemberProfile(member, key) {
    return <MemberProfile key={key}
      {...member}
      onClick={() => this.highlightMember(member)}/>
  }

  rowToMemberGrid(members, key) {
    return <div key={key}
      style={styles.memberGrid}>
      {members.map(this.memberToMemberProfile)}
    </div>
  }

  getOverlay(highlightedMember) {
    return (
      <div style={styles.shaderDiv}
        onClick={this.hideHighlight}>

        <MemberDescription {...highlightedMember}/>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.teamPageContainer}>
        <Menu/>

        <ReactCSSTransitionGroup transitionName="teamMemberHighlightOverlay"
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          {this.state.highlightedMember == null
            ? ''
            : this.getOverlay(this.state.highlightedMember)}
        </ReactCSSTransitionGroup>

        <div style={styles.teamPageBanner}>
          <h1>Meet Our Team</h1>
        </div>

        {[members.row1, members.row2, members.row1].map(this.rowToMemberGrid)}
      </div>
    )
  }
}
