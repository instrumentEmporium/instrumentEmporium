import { connect } from 'react-redux';

import Home from '../components/Home';
import { fetchTopFive } from '../store';

const mapStateToProps = (storeState, ownProps) => ({
    topFive: storeState.topFive
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadTopFive: () => {
    const action = fetchTopFive();
    return dispatch(action);
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
