import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withScreenFocus, withLoadingIndicator } from 'src/components';
import { fetchExchangeRates } from './actions';
import { getExchangeRatesData, isExchangeRatesFetching } from './selectors';
import CurrencyScreen from './CurrencyScreen';

const mapStateToProps = state => ({
  isLoading: isExchangeRatesFetching(state),
  data: getExchangeRatesData(state)
});

export default compose(
  connect(mapStateToProps, { onFocus: fetchExchangeRates }),
  withScreenFocus('Currency'),
  withLoadingIndicator
)(CurrencyScreen);
