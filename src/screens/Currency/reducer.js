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
  [fetchExchangeRatesStart]: state => ({
    ...state,
    fetching: true
  }),
  [fetchExchangeRatesFailure]: state => ({
    ...state,
    fetching: false
  }),
  [setExchangeRates]: (state, { payload: { rates }}) => ({
    ...state,
    rates,
    fetching: false
  })
}, initialState);

export default currency;
