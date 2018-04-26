import { createAction } from 'redux-actions';
import * as api from 'src/api';
import { USD, EUR, DEFAULT_BASE_CURRENCY } from 'src/constants/currency';
import { getRequestQueryParameter } from './helpers';

export const fetchExchangeRatesStart = createAction('CURRENCY/FETCH_EXCHANGE_RATES_START');
export const fetchExchangeRatesFailure = createAction('CURRENCY/FETCH_EXCHANGE_RATES_FAILURE');
export const setExchangeRates = createAction(
  'CURRENCY/SET_EXCHANGE_RATES',
  data => ({
    exchangeRates: data
  })
);

export const fetchExchangeRates = () => dispatch => {
  dispatch(fetchExchangeRatesStart());

  return api.fetchExchangeRates({ q: getRequestQueryParameter() })
    .then(data => dispatch(setExchangeRates(data)))
    .catch(e => dispatch(fetchExchangeRatesFailure(e)));
};
