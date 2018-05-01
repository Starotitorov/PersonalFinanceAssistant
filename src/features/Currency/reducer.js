import { handleActions } from 'redux-actions';
import {
  fetchExchangeRatesStart,
  fetchExchangeRatesFailure,
  setExchangeRates
} from './actions';

const initialState = {
  rates: {},
  fetching: false,
  error: false
};

const currency = handleActions({
  [fetchExchangeRatesStart]: state => ({
    ...state,
    fetching: true,
    error: false
  }),
  [fetchExchangeRatesFailure]: state => ({
    ...state,
    fetching: false,
    error: true
  }),
  [setExchangeRates]: (state, { payload: { exchangeRates }}) => ({
    ...state,
    rates: exchangeRates,
    fetching: false,
    error: false
  })
}, initialState);

export default currency;
