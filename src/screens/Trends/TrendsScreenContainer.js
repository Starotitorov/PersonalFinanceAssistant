import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { getTrendsData, isTrendsDataFetching, getDateRange } from './selectors';
import { fetchTrendsData, setDateRange } from './actions';
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

export default compose(
  connect(mapStateToProps, { fetchTrendsData, setDateRange }),
  withHandleGetData
)(TrendsScreen);
