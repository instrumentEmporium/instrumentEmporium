import { connect } from 'react-redux';

import SingleOrder from '../components/SingleOrder';
import { fetchOrder } from '../store';

const mapStateToProps = (state, ownProps) => ({
    singleOrder: state.singleOrder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadSingleOrder: () => {
        const action = fetchOrder(+ownProps.match.params.id);
        return dispatch(action);
    }
});

const SingleOrderContainer = connect(mapStateToProps, mapDispatchToProps)(SingleOrder);

export default SingleOrderContainer;
