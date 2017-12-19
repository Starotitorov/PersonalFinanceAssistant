import { handleActions } from 'redux-actions';
import { setExchangeRates } from 'src/actions/exchangeRates';

const initialState = {
    rates: {}
};

const exchangeRates = handleActions({
    [setExchangeRates]: (state, action) => {
        return {
            ...state,
            rates: action.payload.rates
        };
    }
}, initialState);

export default exchangeRates;
