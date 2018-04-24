import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Rating, Form } from 'semantic-ui-react';


export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: "",
            body: "",
            rating: 5
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRating(event, data) {
        this.setState({ rating: data.rating })
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
                            <Grid style={{
                                margin: '2em'
                            }}>
                                <h1>Reviews</h1>
                                <Grid celled>
                                    <Grid.Column width={4}>
                                        <h3>Name: {review && review.user.email}</h3>  {/* Set this value to fullname after a getter for*/}
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Grid.Row>
                                            <h3>Name: {this.props.singleInstrument && this.props.singleInstrument.name}</h3>
                                            <h3>Rating:
                                        <Rating icon="star" maxRating={5} rating={review && review.rating} disabled />
                                            </h3>
                                            <h4>{review && review.subject}</h4>
                                            <p>{review && review.body}</p>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Row centered>
                                        {
                                            !Object.keys(this.props.user).length ?
                                                <div >
                                                    <h3>Log in to leave a review!</h3>
                                                    <Button as={Link} to={`/login`}>Login</Button>
                                                </div>
                                                :
                                                <div>
                                                    <Grid.Row >
                                                        <Form.Field label='Title' control='input' width={4} placeholder='Title' name='subject' onChange={this.handleChange} />
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <h3>Rating:
                                                            <Rating icon="star" maxRating={5} rating={this.state.rating} onRate={this.handleRating} />
                                                        </h3>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Form.TextArea label='Your review' width={8} placeholder='Tell us what you think!' onChange={this.handleChange} />
                                                    </Grid.Row>
                                                    <Form.Button>Submit</Form.Button>
                                                </div>
                                        }
                                    </Grid.Row>
                                </Grid>
                            </Grid>
                        </div >
                    )
                })
        )
    }
}