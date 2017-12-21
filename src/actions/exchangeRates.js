import { createAction } from 'redux-actions';
import * as api from 'src/api';

export const setExchangeRates = createAction('EXCHANGE_RATES/SET_EXCHANGE_RATES');

export const fetchExchangeRates = () => dispatch => {
    return api.fetchExchangeRates()
        .then(response => response.json())
        .then(data => dispatch(setExchangeRates(data)))
};
