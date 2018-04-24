import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Rating, Form } from 'semantic-ui-react';


export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: "",
            body: "",
            rating: 5,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.props)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRating(event, data) {
        this.setState({ rating: data.rating })
    }

    handleSubmit() {
        let review = {
            subject: this.state.subject,
            body: this.state.body,
            rating: this.state.rating,
            userId: this.props.user.id,
            instrumentId: this.props.singleInstrument.id
        }
        this.props.sendReview(review, this.props.singleInstrument.id)
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
                <Grid style={{
                    margin: '2em'
                }}>
                    <h1>Reviews</h1>
                    {
                        reviews && reviews.map(review => {
                            return (
                                <Grid.Row>
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
                                    </Grid>
                                </Grid.Row>
                            )
                        })
                    }
                    <Grid.Row centered>
                        {
                            !Object.keys(this.props.user).length ?
                                <div >
                                    <h3>Log in to leave a review!</h3>
                                    <Button as={Link} to={`/login`}>Login</Button>
                                </div>
                                :
                                <Form onSubmit={this.handleSubmit}>
                                    <Grid.Row width={10}>
                                        <div>
                                            <Form.Field label='Title' control='input' width={10} placeholder='Title' name='subject' onChange={this.handleChange} />
                                        </div>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <div>
                                            <h3>Rating:
                                                            <Rating icon="star" maxRating={5} rating={this.state.rating} onRate={this.handleRating} />
                                            </h3>
                                        </div>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <div>
                                            <Form.TextArea label='Your review' width={10} placeholder='Tell us what you think!' name='body' onChange={this.handleChange} />
                                        </div>
                                    </Grid.Row>
                                    <div>
                                        <Form.Button size='large' type='submit'>Submit</Form.Button>
                                    </div>
                                </Form>
                        }
                    </Grid.Row>
                </Grid>
        )
    }
}
