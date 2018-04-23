import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Grid, Icon, Button, Rating } from 'semantic-ui-react';
const audio = document.createElement('audio');


const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
  { key: 4, text: "4", value: 4 },
  { key: 5, text: "5", value: 5 }
]

export default class SingleInstrument extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audioPlaying: false
    }
  }


  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
    this.props.loadCart();
  }

  componentWillUnmount() {
    this.stopAudio()
  }

  playAudio(audioUrl) {
    audio.src = audioUrl;
    audio.load();
    audio.play();
    this.setState({ audioPlaying: true })
  }

  stopAudio() {
    audio.pause();
    this.setState({audioPlaying: false})
  }

  render() {
    const { singleInstrument, cart } = this.props;
    return (
      <div>
        <Button
          as={Link}
          to={'/instruments'}
          style={{
            marginLeft: '4em',
            marginTop: '2em'
          }}>
          <Icon name="left arrow" />Back to all instruments
            </Button>
        <Grid style={{
          margin: '2em'
        }}>
          <Grid celled>
            <Grid.Column width={3}>
              <Image src={singleInstrument && singleInstrument.imageUrl} />
                {this.state.audioPlaying === false ?
                  <Button icon='play' content='Play Sample' onClick={() => this.playAudio(singleInstrument.audioUrl)}></Button> :
                  <Button icon='stop' content='Stop' onClick={() => this.stopAudio()}></Button>
                }
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row>
                <h3>Name: {singleInstrument && singleInstrument.name}</h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Price: ${singleInstrument && singleInstrument.price}</h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Rating:
                        <Rating icon="star" maxRating={5} rating={singleInstrument.rating} disabled />
                </h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Quantity:
                        <Dropdown compact selection defaultValue={1} options={options} />
                  <Button onClick={() => {
                    let currentItem = {
                      id: +singleInstrument.id, price: +singleInstrument.price, quantity: 1
                    }
                    cart.items && cart.items.length ? this.props.addToCart(cart.id, currentItem, cart.items) : this.props.createCart(currentItem)
                  }}>
                    <Icon name="add to cart" size="large" color="teal" />
                  </Button>
                </h3>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid>
        {singleInstrument.reviews && singleInstrument.reviews.map(review => {
          return (
            <Grid style={{
              margin: '2em'
            }}>
              <Grid celled>
                <Grid.Column width={4}>
                  <h3>Name: {review.user.email}</h3>  {/* Set this value to fullname after a getter for*/}
                </Grid.Column>
                <Grid.Column width={6}>
                  <Grid.Row>
                    <h3>Name: {singleInstrument && singleInstrument.name}</h3>
                    <h3>Rating:
                              <Rating icon="star" maxRating={5} rating={review.rating} disabled />
                    </h3>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Grid>
          )
        })
        }
      </div>
    )
  }
}
