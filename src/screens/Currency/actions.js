import { createAction } from 'redux-actions';
import * as api from 'src/api';

export const fetchExchangeRatesStart = createAction('CURRENCY/FETCH_EXCHANGE_RATES_START');
export const fetchExchangeRatesFailure = createAction('CURRENCY/FETCH_EXCHANGE_RATES_FAILURE');
export const setExchangeRates = createAction('CURRENCY/SET_EXCHANGE_RATES');

export const fetchExchangeRates = () => dispatch => {
  dispatch(fetchExchangeRatesStart());

  return api.fetchExchangeRates()
    .then(data => dispatch(setExchangeRates(data)))
    .catch(e => dispatch(fetchExchangeRatesFailure(e)));
};
