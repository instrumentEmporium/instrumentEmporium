import { connect } from 'react-redux';

import Reviews from '../components/Reviews';
import { postReview } from '../store';

const mapStateToProps = storeState => ({
  singleInstrument: storeState.singleInstrument
});

const mapDispatchToProps = dispatch => ({
  sendReview: (review, instrumentId) => {
    const action = postReview(review, instrumentId);
    return dispatch(action);
  }
});

const ReviewsContainer = connect(mapStateToProps)(Reviews);

export default ReviewsContainer;
