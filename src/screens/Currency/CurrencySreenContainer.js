import { connect } from 'react-redux';
import { compose } from 'recompose'
import { withScreenFocus, withLoadingIndicator } from 'src/components'
import { fetchExchangeRates } from './actions';
import { getExchangeRates, isExchangeRatesFetching } from './selectors'
import CurrencyScreen from './CurrencyScreen';

const mapStateToProps = state => {
    return {
        isLoading: isExchangeRatesFetching(state),
        exchangeRates: getExchangeRates(state)
    };
};

export default compose(
    connect(mapStateToProps, { onFocus: fetchExchangeRates }),
    withScreenFocus('Currency'),
    withLoadingIndicator
)(CurrencyScreen)
