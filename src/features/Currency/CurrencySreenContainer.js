import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withScreenFocus, withLoadingIndicator, withErrorState } from 'src/components';
import { fetchExchangeRates } from './actions';
import { getExchangeRatesData, isExchangeRatesFetching, isErrorState } from './selectors';
import CurrencyScreen from './CurrencyScreen';

const mapStateToProps = state => ({
  isError: isErrorState(state),
  isLoading: isExchangeRatesFetching(state),
  data: getExchangeRatesData(state)
});

export default compose(
  connect(mapStateToProps, { onFocus: fetchExchangeRates }),
  withScreenFocus('Currency'),
  withLoadingIndicator,
  withErrorState
)(CurrencyScreen);
