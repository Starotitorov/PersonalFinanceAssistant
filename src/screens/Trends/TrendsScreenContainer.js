import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getTrendsData, isTrendsDataFetching, getDateRange } from './selectors';
import { withLoadingIndicator, withScreenFocus } from 'src/components';
import { fetchTrendsData, setDateRange } from './actions';
import TrendsScreen from './TrendsScreen';

const mapStateToProps = state => ({
  dateRange: getDateRange(state),
  isLoading: isTrendsDataFetching(state),
  data: getTrendsData(state)
});

export default compose(
  connect(mapStateToProps, { onFocus: fetchTrendsData, setDateRange }),
  withScreenFocus('Trends'),
  withLoadingIndicator
)(TrendsScreen);
