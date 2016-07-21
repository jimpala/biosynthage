import React from 'react';

const styles = {

    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingTop: '120px',
    },


    billboardDiv: {
        width: '800px',
        height: '350px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: '6px',



    },


    video: {
        position: 'relative',
        zIndex: 2,
    }
};

export default class LandingPageInformation extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (
            //[1]
            <div id="mainSlide" style={styles.container} onClick={this.props.toggleOnOff}>
                <div id="billboardDiv" style={styles.billboardDiv}>
                    <iframe id='landingVideo' className="cinema" style={styles.video} width="500" height="200"
                            src="https://www.youtube.com/embed/IFfLCuHSZ-U"
                            frameBorder="0"></iframe>
                </div>
            </div>
        )
    }

}

/*
 [1]
 Note that first='this.props.toggleOnOff' references the toggleOnOff prop as the function itself
 (a member variable) rather than a function call ('this.props.toggleOnOff()'), whereas in
 MainSlide's 'buttonClick' method, 'toggleOnOff()' is called. Event handlers need to be passed the
 function itself and will do the calling for you, however if you're writing the event handler
 yourself, you need to call.
 */