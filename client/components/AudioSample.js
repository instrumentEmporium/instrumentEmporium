import React from 'react';
import { Button } from 'semantic-ui-react';
const audio = document.createElement('audio');

//YAY!!! AUDIO SAMPLE!!!!
//do other parts of the application need to know about this? Yes - reducer, nah - local state is perf.
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
                        <Button icon="play" content="Play Sample" onClick={() => this.playAudio(this.props.instrument.audioUrl)} /> :
                        <Button icon="stop" content="Stop" onClick={() => this.stopAudio()} />
                }
            </div>
        )
    }
}
