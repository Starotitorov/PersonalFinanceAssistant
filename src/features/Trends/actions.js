import { createAction } from 'redux-actions';
import moment from 'moment';
import { alerts } from 'src/utils';
import * as api from '../../api';
import { getRequestQueryParameter } from './helpers';
import { fetchAccounts, fetchTransactions, fetchCategories } from '../../services/database';

export const setDateRange = createAction(
  'TRENDS/SET_DATE_RANGE',
  dateRange => ({ dateRange })
);

export const setExchangeRates = createAction(
  'TRENDS_SET_EXCHANGE_RATES',
  exchangeRates => ({ exchangeRates })
);

export const fetchTrendsDataStart = createAction('TRENDS/FETCH_TRENDS_DATA_START');
export const fetchTrendsDataFailure = createAction('TRENDS/FETCH_TRENDS_DATA_FAILURE');
export const fetchTrendsDataSuccess = createAction('TRENDS/FETCH_TRENDS_DATA_SUCCESS');

export const setTrendsData = createAction('TRENDS/SET_TRENDS_DATA');

const DATE_FORMAT = 'YYYY-MM-DD';

export const fetchTrendsData = () => async dispatch => {
  dispatch(fetchTrendsDataStart());

  const [accounts, categories, transactions] = await Promise.all([
    fetchAccounts(),
    fetchCategories(),
    fetchTransactions()
  ]);

  dispatch(setTrendsData({ accounts, categories, transactions }));

  try {
    if (transactions.length > 0) {
      const rates = await api.fetchExchangeRates({
        q: getRequestQueryParameter(),
        date: moment(transactions[0].date).format(DATE_FORMAT),
        endDate: moment(transactions[transactions.length - 1].date).format(DATE_FORMAT)
      });

      dispatch(setExchangeRates(rates));
    }

    dispatch(fetchTrendsDataSuccess());
  } catch(e) {
    dispatch(fetchTrendsDataFailure());

    alerts.showNetworkErrorAlert();
  }
};
