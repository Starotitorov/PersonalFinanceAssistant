import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { getTrendsData, isTrendsDataFetching, getDateRange } from './selectors';
import { fetchTrendsData, setDateRange, resetTrendsData } from './actions';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => ({
  dateRange: getDateRange(state),
  isTrendsDataFetching: isTrendsDataFetching(state),
  data: getTrendsData(state)
});

const withHandleGetData = withHandlers({
  handleGetData: ({ setDateRange, fetchTrendsData }) => dateRange => {
    setDateRange(dateRange);

    fetchTrendsData();
  }
});

const withLifecycle = lifecycle({
  componentWillUnmount() {
    this.props.resetTrendsData();
  }
});

export default compose(
  connect(mapStateToProps, { fetchTrendsData, setDateRange, resetTrendsData }),
  withLifecycle,
  withHandleGetData
)(TrendsScreen);
