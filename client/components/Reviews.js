import React from 'react';
import { Grid, Button, Rating } from 'semantic-ui-react';


export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props) {
            this.setState({ reviews: this.props.singleInstrument.reviews })
        }
    }


    render() {
        const { reviews } = this.props.singleInstrument
        return (
            !reviews ?
                <Grid celled>
                    <Grid.Column width={10}>
                        <Grid.Row>
                            <h2>There are no reviews for this product</h2>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
                :
            reviews && reviews.map(review => {
                return (
                    <div key={review.id}>
                        <h1>Reviews</h1>
                        <Grid style={{
                            margin: '2em'
                        }}>
                            <Grid celled>
                                <Grid.Column width={4}>
                                    <h3>Name: {review.user.email}</h3>  {/* Set this value to fullname after a getter for*/}
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Grid.Row>
                                        <h3>Name: {this.props.singleInstrument && this.props.singleInstrument.name}</h3>
                                        <h3>Rating:
                                        <Rating icon="star" maxRating={5} rating={review.rating} disabled />
                                        </h3>
                                        <h4>{review.subject}</h4>
                                        <p>{review.body}</p>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid>
                        </Grid>
                    </div>
                )
            })
        )
    }
}