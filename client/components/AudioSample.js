import React from 'react';
import { Button } from 'semantic-ui-react';
const audio = document.createElement('audio');

export default class AudioSample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audioPlaying: false
        }
    }

    componentWillUnmount() {
        this.stopAudio()
    }

    playAudio(audioUrl) {
        audio.src = audioUrl;
        audio.load();
        audio.play();
        this.setState({ audioPlaying: true });
    }

    stopAudio() {
        audio.pause();
        this.setState({ audioPlaying: false });
    }

    render() {
        return (
            <div>
                {
                    this.state.audioPlaying === false ?
                        <Button icon='play' content='Play Sample' onClick={() => this.playAudio(this.props.instrument.audioUrl)}></Button> :
                        <Button icon='stop' content='Stop' onClick={() => this.stopAudio()}></Button>
                }
            </div>
        )
    }
}