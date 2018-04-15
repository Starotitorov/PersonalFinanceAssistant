import { createAction } from 'redux-actions';
import * as api from 'src/api';

export const setSelectedAccount = createAction(
  'TRENDS/SET_SELECTED_ACCOUNT',
  id => ({ id })
);

export const setTransactions = createAction(
  'TRENDS/SET_TRANSACTIONS',
  transactions => ({ transactions })
);

export const setAccounts = createAction(
  'TRENDS/SET_ACCOUNTS',
  accounts => ({ accounts })
);

export const setCategories = createAction(
  'TRENDS/SET_CATEGORIES',
  categories => ({ categories })
);

export const fetchTrendsDataStart = createAction('TRENDS/FETCH_TRENDS_DATA_START');
export const fetchTrendsDataFailure = createAction('TRENDS/FETCH_TRENDS_DATA_FAILURE');
export const fetchTrendsDataSuccess = createAction('TRENDS/FETCH_TRENDS_DATA_SUCCESS');

export const fetchTrendsData = () => dispatch => {
  dispatch(fetchTrendsDataStart());

  return Promise.all([
    api.fetchAccounts(),
    api.fetchCategories(),
    api.fetchTransactions()
  ])
    .then(results => {
      const { accounts } = results[0];
      const { categories } = results[1];
      const { transactions } = results[2];

      dispatch(setAccounts(accounts));

      dispatch(setCategories(categories));

      dispatch(setTransactions(transactions));

      dispatch(fetchTrendsDataSuccess());
    })
    .catch(e => dispatch(fetchTrendsDataFailure(e)));
};
