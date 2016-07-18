import React from 'react';

const styles = {
    videoDiv: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    video: {
        position: 'relative',
        zIndex: 2,
    }
};

export default class LandingPageInformation extends React.Component {
    // componentDidMount() {
    //     // $('#landingVideo').animate({
    //     //   opacity: 1
    //     // }, 1000);
    //     //
    //     // $('#videoDiv').animate({
    //     //   opacity: 0.75
    //     // }, 1000)
    //
    //     $('.cinema').cinema();
    //
    // }
    //
    // componentWillUnmount() {
    //     $('.cinema').uncinema();
    // }

    render() {
        return (
            <div id='videoDiv' style={styles.videoDiv} onClick={this.props.toggleOnOff}>
                <iframe id='landingVideo' className="cinema" style={styles.video} width="500" height="200"
                        src="https://www.youtube.com/embed/IFfLCuHSZ-U"
                        frameBorder="0"></iframe>
            </div>
        )
    }

}