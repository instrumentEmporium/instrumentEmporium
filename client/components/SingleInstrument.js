import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Grid, Icon } from 'semantic-ui-react';

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
        console.log(this.props)
        const { singleInstrument } = this.props;
        return (
            <div>
                <Link to={'/instruments'}><h4>Back to all instruments</h4></Link>  {/* link to previous page, history or something */}
                <Grid>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Grid celled>
                        <Grid.Column width={3}>
                            <Image src={singleInstrument && singleInstrument.imageUrl} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid.Row>
                                <h3>Name: {singleInstrument && singleInstrument.name}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Price: {singleInstrument && singleInstrument.price}</h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Rating: {singleInstrument && singleInstrument.rating} </h3>
                            </Grid.Row>
                            <Grid.Row>
                                <h3>Quantity:
                        <Dropdown compact selection defaultValue={1} options={options} />
                        <Icon name="add to cart" size="large" color="teal" />
                                </h3>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

/*

*/
