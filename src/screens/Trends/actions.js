import { createAction } from 'redux-actions';
import * as api from 'src/api';

export const setTransactions = createAction(
  'TRENDS/SET_TRANSACTIONS',
  transactions => ({ transactions })
);

export const setDateRange = createAction(
  'TRENDS/SET_DATE_RANGE',
  dateRange => ({ dateRange })
);

export const fetchTrendsDataStart = createAction('TRENDS/FETCH_TRENDS_DATA_START');
export const fetchTrendsDataFailure = createAction('TRENDS/FETCH_TRENDS_DATA_FAILURE');
export const fetchTrendsDataSuccess = createAction('TRENDS/FETCH_TRENDS_DATA_SUCCESS');

export const fetchTrendsData = () => dispatch => {
  dispatch(fetchTrendsDataStart());

  api.fetchTransactions()
    .then(({ transactions }) => {
      dispatch(setTransactions(transactions));

      dispatch(fetchTrendsDataSuccess());
    })
    .catch(e => dispatch(fetchTrendsDataFailure(e)));
};
