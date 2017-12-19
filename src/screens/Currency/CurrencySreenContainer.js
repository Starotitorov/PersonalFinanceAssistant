import { connect } from 'react-redux';
import { fetchExchangeRates } from 'src/actions/exchangeRates';
import CurrencyScreen from './CurrencyScreen';

const mapStateToProps = state => {
    return {
        exchangeRates: state.exchangeRates.rates
    };
};

export default connect(mapStateToProps, { fetchExchangeRates })(CurrencyScreen)
