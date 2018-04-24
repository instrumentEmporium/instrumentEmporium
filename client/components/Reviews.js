import React from 'react';

export default class Reviews extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    render() {
        console.log(this.props)
        return (
            <h1>Hello</h1>
        )
    //     reviews = (this.props.reviews)
    //     return (
    //         reviews && reviews.map(review => {
    //             return (
    //                 <div>
    //                     <h1>Reviews</h1>
    //                     <Grid style={{
    //                         margin: '2em'
    //                     }}>
    //                         <Grid celled>
    //                             <Grid.Column width={4}>
    //                                 <h3>Name: {review.user.email}</h3>  {/* Set this value to fullname after a getter for*/}
    //                             </Grid.Column>
    //                             <Grid.Column width={6}>
    //                                 <Grid.Row>
    //                                     <h3>Name: {singleInstrument && singleInstrument.name}</h3>
    //                                     <h3>Rating:
    //                                     <Rating icon="star" maxRating={5} rating={review.rating} disabled />
    //                                     </h3>
    //                                 </Grid.Row>
    //                             </Grid.Column>
    //                         </Grid>
    //                     </Grid>
    //                 </div>
    //             )
    //         })
    //     )
    }
}