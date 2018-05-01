import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getTrendsData, isTrendsDataFetching, getDateRange, isErrorState } from './selectors';
import { withLoadingIndicator, withScreenFocus, withErrorState } from 'src/components';
import { fetchTrendsData, setDateRange } from './actions';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => ({
  isError: isErrorState(state),
  dateRange: getDateRange(state),
  isLoading: isTrendsDataFetching(state),
  data: getTrendsData(state)
});

export default compose(
  connect(mapStateToProps, { onFocus: fetchTrendsData, setDateRange }),
  withScreenFocus('Trends'),
  withLoadingIndicator,
  withErrorState
)(TrendsScreen);
