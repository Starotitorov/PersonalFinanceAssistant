import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getTrendsData, isTrendsDataFetching, getDateRange } from './selectors';
import { withLoadingIndicator } from 'src/components';
import { fetchTrendsData, setDateRange } from './actions';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => ({
  dateRange: getDateRange(state),
  isLoading: isTrendsDataFetching(state),
  data: getTrendsData(state)
});

const withTrendsData = lifecycle({
  componentDidMount() {
    this.props.fetchTrendsData()
  }
});

export default compose(
  connect(mapStateToProps, { fetchTrendsData, setDateRange }),
  withTrendsData,
  withLoadingIndicator
)(TrendsScreen);
