import { createAction } from 'redux-actions';
import moment from 'moment';
import * as api from 'src/api';
import { getRequestQueryParameter } from './helpers';
import { getDateRange } from './selectors';

export const setTransactions = createAction(
  'TRENDS/SET_TRANSACTIONS',
  transactions => ({ transactions })
);

export const setExchangeRates = createAction(
  'TRENDS/SET_EXCHANGE_RATES',
  exchangeRates => ({ exchangeRates })
);

export const setDateRange = createAction(
  'TRENDS/SET_DATE_RANGE',
  dateRange => ({ dateRange })
);

export const fetchTrendsDataStart = createAction('TRENDS/FETCH_TRENDS_DATA_START');
export const fetchTrendsDataFailure = createAction('TRENDS/FETCH_TRENDS_DATA_FAILURE');
export const fetchTrendsDataSuccess = createAction('TRENDS/FETCH_TRENDS_DATA_SUCCESS');

const DATE_FORMAT = 'YYYY-MM-DD';

export const resetTransactions = createAction('TRENDS/RESET_TRANSACTIONS');

export const fetchTrendsData = () => (dispatch, getState) => {
  const { from, to } = getDateRange(getState());

  dispatch(resetTransactions());

  dispatch(fetchTrendsDataStart());

  api.fetchTransactions({fromDate: from, toDate: to })
    .then(async ({ transactions }) => {
      dispatch(setTransactions(transactions));

      if (transactions.length > 0) {
        const rates = await api.fetchExchangeRates({
          q: getRequestQueryParameter(),
          date: moment(transactions[0].date).format(DATE_FORMAT),
          endDate: moment(transactions[transactions.length - 1].date).format(DATE_FORMAT)
        });

        dispatch(setExchangeRates(rates));
      }

      dispatch(fetchTrendsDataSuccess());
    })
    .catch(e => dispatch(fetchTrendsDataFailure(e)));
};
