import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Grid, Icon, Button, Rating } from 'semantic-ui-react';

const options = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 }
]
//

export default class SingleInstrument extends React.Component {


    componentDidMount() {
        if (this.props.loadInstrument) {
            this.props.loadInstrument();
        }
    }

    render() {
        const { singleInstrument } = this.props;
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
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid.Row>
                                <h3>Name: {singleInstrument && singleInstrument.name}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Price: ${singleInstrument && singleInstrument.price}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Rating: {singleInstrument.rating}
                                  <Rating icon="star" maxRating={5} rating={singleInstrument.rating} disabled />
                                </h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Quantity:
                                  <Dropdown compact selection defaultValue={1} options={options} />
                                  <Icon name="add to cart" size="large" color="teal" />
                                </h3>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

/*

*/
