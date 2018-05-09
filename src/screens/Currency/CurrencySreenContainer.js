import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import { fetchExchangeRates } from './actions';
import { getExchangeRatesData, isExchangeRatesFetching } from './selectors';
import CurrencyScreen from './CurrencyScreen';

const mapStateToProps = state => ({
  isLoading: isExchangeRatesFetching(state),
  data: getExchangeRatesData(state)
});

const withCurrencyScreenData = lifecycle({
  componentDidMount() {
    this.props.fetchExchangeRates();
  }
});

export default compose(
  connect(mapStateToProps, { fetchExchangeRates }),
  withCurrencyScreenData,
  withLoadingIndicator
)(CurrencyScreen);
