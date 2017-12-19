import { createAction } from 'redux-actions';

const EXCHANGE_RATES_URL = 'https://api.fixer.io/latest?base=USD';

export const setExchangeRates = createAction('EXCHANGE_RATES/SET_EXCHANGE_RATES');

export const fetchExchangeRates = () => dispatch => {
    return fetch(EXCHANGE_RATES_URL)
        .then(response => response.json())
        .then(data => dispatch(setExchangeRates(data)))
};
