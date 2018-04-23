import { createAction } from 'redux-actions';
import * as api from 'src/api';
import { USD, EUR, DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

export const fetchExchangeRatesStart = createAction('CURRENCY/FETCH_EXCHANGE_RATES_START');
export const fetchExchangeRatesFailure = createAction('CURRENCY/FETCH_EXCHANGE_RATES_FAILURE');
export const setExchangeRates = createAction(
  'CURRENCY/SET_EXCHANGE_RATES',
  data => ({
    exchangeRates: {
      [USD]: data.BYN_USD.val,
      [EUR]: data.BYN_EUR.val
    }
  })
);

export const fetchExchangeRates = () => dispatch => {
  dispatch(fetchExchangeRatesStart());

  return api.fetchExchangeRates({ from: DEFAULT_BASE_CURRENCY, to: [USD, EUR]})
    .then(data => dispatch(setExchangeRates(data)))
    .catch(e => dispatch(fetchExchangeRatesFailure(e)));
};
