import { handleActions } from 'redux-actions';
import {
    fetchExchangeRatesStart,
    fetchExchangeRatesFailure,
    setExchangeRates
} from './actions';

const initialState = {
    rates: {},
    fetching: false
};

const currency = handleActions({
    [fetchExchangeRatesStart]: state => {
        return {
            ...state,
            fetching: true
        }
    },
    [fetchExchangeRatesFailure]: state => {
        return {
            ...state,
            fetching: false
        }
    },
    [setExchangeRates]: (state, { payload: { rates }}) => {
        return {
            ...state,
            rates,
            fetching: false
        };
    }
}, initialState);

export default currency;
