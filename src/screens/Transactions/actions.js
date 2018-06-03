import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { LIST, CHART } from './constants';
import {
  getAllAccounts,
  getAllCategories,
  getTimeRange,
  getSelectedAccountId,
  getCurrentPeriodType,
  getCurrentDate,
  isTransactionsListDataRefreshing
} from './selectors';

export const changePeriodView = periodView => (dispatch, getState) => {
  const refreshing = isTransactionsListDataRefreshing(getState());

  if (refreshing) {
    return;
  }

  dispatch(setPeriodView(periodView));

  dispatch(fetchTransactions());
};

export const setPeriodView = createAction(
  'TRANSACTIONS_LIST/SET_PERIOD_VIEW',
  periodType => ({ periodType })
);

export const changeCurrentDate = createAction(
  'TRANSACTIONS_LIST/CHANGE_CURRENT_DATE',
  currentDate => ({ currentDate })
);

export const resetTransactionsListData = createAction('TRANSACTIONS_LIST/RESET_TRANSACTIONS_LIST_DATA');

export const changeDate = isChangeForward => (dispatch, getState) => {
  const refreshing = isTransactionsListDataRefreshing(getState());

  if (refreshing) {
    return;
  }

  const { transactionsList: { currentDate, periodType }} = getState();

  const periodModificator = periodType;

  const timeModificator = isChangeForward ? 1 : -1;
  const newDate = currentDate.clone().add(timeModificator, periodModificator);

  dispatch(changeCurrentDate(newDate));

  dispatch(fetchTransactions());
};

export const changeDateForward = () => dispatch => {
  dispatch(changeDate(true));
};

export const changeDateBack = () => dispatch => {
  dispatch(changeDate());
};

export const setTransactions = createAction(
  'TRANSACTIONS_LIST/SET_TRANSACTIONS',
  transactions => ({ transactions })
);

export const setAccounts = createAction(
  'TRANSACTIONS_LIST/SET_ACCOUNTS',
  accounts => ({ accounts })
);

export const setCategories = createAction(
  'TRANSACTIONS_LIST/SET_CATEGORIES',
  categories => ({ categories })
);

export const fetchTransactionsListDataStart = createAction('TRANSACTIONS_LIST/FETCH_TRANSACTIONS_LIST_DATA_START');
export const fetchTransactionsListDataFailure = createAction('TRANSACTIONS_LIST/FETCH_TRANSACTIONS_LIST_DATA_FAILURE');
export const fetchTransactionsListDataSuccess = createAction('TRANSACTIONS_LIST/FETCH_TRANSACTIONS_LIST_DATA_SUCCESS');

export const refreshTransactionsListDataStart = createAction('TRANSACTIONS_LIST/REFRESH_TRANSACTIONS_LIST_DATA_START');
export const refreshTransactionsListDataFailure = createAction('TRANSACTIONS_LIST/REFRESH_TRANSACTIONS_LIST_DATA_FAILURE');
export const refreshTransactionsListDataSuccess = createAction('TRANSACTIONS_LIST/REFRESH_TRANSACTIONS_LIST_DATA_SUCCESS');

export const fetchTransactionsStart = createAction('TRANSACTIONS_LIST/FETCH_TRANSACTIONS_START');
export const fetchTransactionsFailure = createAction('TRANSACTIONS_LIST/FETCH_TRANSACTIONS_FAILURE');

export const resetTransactions = createAction('TRANSACTIONS_LIST/RESET_TRANSACTIONS');

export const fetchTransactionsRequest = () => (dispatch, getState) => {
  const state = getState();
  const currentDate = getCurrentDate(state);
  const periodType = getCurrentPeriodType(state);
  const { fromDate, toDate } = getTimeRange(state);
  const accountId = getSelectedAccountId(state);

  return api.fetchTransactionsOnce({ accountId, fromDate, toDate })
    .then(({ transactions }) => {
      dispatch(setPeriodView(periodType));

      dispatch(changeCurrentDate(currentDate));

      dispatch(setSelectedAccount(accountId));

      dispatch(setTransactions(transactions));
    });
};

export const fetchTransactions = () => async dispatch => {
  dispatch(resetTransactions());

  dispatch(fetchTransactionsStart());

  try {
    await dispatch(fetchTransactionsRequest());
  } catch(e) {
    if (e.message === 'Request cancellation.') {
      return;
    }

    dispatch(fetchTransactionsFailure());
  }
};

const fetchMainData = () => dispatch =>
  Promise.all([
    api.fetchAccounts(),
    api.fetchCategories()
  ])
    .then(results => {
      const { accounts } = results[0];
      const { categories } = results[1];

      dispatch(setAccounts(accounts));

      dispatch(setCategories(categories));
    });

const fetchTransactionsListDataRequest = () => dispatch =>
  Promise.all([
    dispatch(fetchMainData()),
    dispatch(fetchTransactions())
  ]);

export const fetchTransactionsListData = () => async dispatch => {
  dispatch(fetchTransactionsListDataStart());

  try {
    await dispatch(fetchTransactionsListDataRequest());

    dispatch(fetchTransactionsListDataSuccess());
  } catch (e) {
    dispatch(fetchTransactionsListDataFailure(e));
  }
};

export const refreshTransactionsListData = () => async dispatch => {
  dispatch(refreshTransactionsListDataStart());

  try {
    await Promise.all([
      dispatch(fetchMainData()),
      dispatch(fetchTransactionsRequest())
    ]);

    dispatch(refreshTransactionsListDataSuccess());
  } catch (e) {
    dispatch(refreshTransactionsListDataFailure(e));
  }
};

export const setSelectedAccount = createAction(
  'TRANSACTIONS_LIST/SET_SELECTED_ACCOUNT',
  accountId => ({ accountId })
);

export const changeAccount = accountId => (dispatch, getState) => {
  const refreshing = isTransactionsListDataRefreshing(getState());

  if (refreshing) {
    return;
  }

  dispatch(setSelectedAccount(accountId));

  dispatch(fetchTransactions());
};

export const setViewType = createAction(
  'TRANSACTIONS_LIST/SET_VIEW_TYPE',
  viewType => ({ viewType })
);

export const switchViewType = () => (dispatch, getState) => {
  const { transactionsList: { viewType }} = getState();

  dispatch(setViewType(viewType === LIST ? CHART : LIST));
};

export const selectTransaction = id => (dispatch, getState) => {
  const { transactionsList: { transactions: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditTransaction',
    params: {
      transaction: byId[id]
    }
  }));
};

export const addTransaction = () => (dispatch, getState) => {
  const state = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'AddTransaction',
    params: {
      accounts: getAllAccounts(state),
      categories: getAllCategories(state)
    }
  }));
};
