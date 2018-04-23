import React from 'react';
import { Icon, Button, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({ index: this.state.index + 1 });
        }, 5000);
        this.setState({intervalId:intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <Container >
                <section id="carousel">
                    <div id="carousel-text">
                        <h1>Welcome to the Instrument Emporium!</h1>
                        <Button as={Link} to="/instruments" color="yellow" size="huge">
                            Explore our products
                        <Icon name='right arrow' />
                        </Button>
                    </div>
                    <Image className={(this.state.index%3 === 1) ? "carousel-image" : "carousel-image hidden"} src="/images/background1.jpg" />
                    <Image className={(this.state.index%3 === 2) ? "carousel-image" : "carousel-image hidden"} src="/images/background2.jpg" />
                    <Image className={(this.state.index%3 === 0) ? "carousel-image" : "carousel-image hidden"} src='/images/background3.jpg' />
                </section>
            </Container>
        )
    }
}