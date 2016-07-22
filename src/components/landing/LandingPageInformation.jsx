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
        width: '85vw',
        height: '500px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: '6px',
        opacity: '0',
        overflow: 'hidden',

        WebkitTransition: 'opacity 1.0s ease-in',

    },


    video: {
        position: 'relative',
        zIndex: 2,

        borderRadius: '5px',
    }
};

export default class LandingPageInformation extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if (this.props.second){
            setTimeout( () => {
                $('#billboardDiv').css('opacity', '1');
            } ,500);
        }

        else{
            $('#billboardDiv').css('-webkit-transition', 'unset');
            $('#billboardDiv').css('opacity', '1');
        }
    }


    render() {
        return (
            //[1]
            <div id="mainSlide" style={styles.container} onClick={this.props.toggleOnOff}>
                <div id="billboardDiv" style={styles.billboardDiv} onClick={this.props.toggleOnOff}>
                    <iframe id='landingVideo' className="cinema" style={styles.video} width="600" height="337"
                            src="https://www.youtube.com/embed/W2gOIFxCWZ4"
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