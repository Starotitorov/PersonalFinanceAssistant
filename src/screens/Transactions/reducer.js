import moment from 'moment';
import { handleActions, combineActions } from 'redux-actions';
import { arrayToObjectById } from 'src/utils';
import { ALL_ACCOUNTS } from 'src/constants/accounts';
import {
  changeCurrentDate,
  changePeriodView,
  fetchTransactionsListDataStart,
  fetchTransactionsListDataFailure,
  fetchTransactionsListDataSuccess,
  setTransactions,
  setCategories,
  setAccounts,
  refreshTransactionsListDataStart,
  refreshTransactionsListDataFailure,
  refreshTransactionsListDataSuccess,
  setSelectedAccount,
  setViewType
} from './actions';
import { periodTypes, LIST } from './constants';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  accounts: {
    byId: {},
    order: []
  },
  categories: {
    byId: {},
    order: []
  },
  currentDate: moment(),
  periodType: periodTypes.WEEK.value,
  fetching: false,
  refreshing: false,
  selectedAccount: null,
  viewType: LIST
};

const transactionsList = handleActions({
  [changeCurrentDate]: (state, action) => ({
    ...state,
    currentDate: action.payload.currentDate
  }),
  [changePeriodView]: (state, action) => ({
    ...state,
    periodType: action.payload.periodType
  }),
  [fetchTransactionsListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [refreshTransactionsListDataStart]: (state) => ({
    ...state,
    refreshing: true
  }),
  [combineActions(
    fetchTransactionsListDataSuccess,
    fetchTransactionsListDataFailure,
    refreshTransactionsListDataSuccess,
    refreshTransactionsListDataFailure
  )](state) {
    return {
      ...state,
      fetching: false,
      refreshing: false
    };
  },
  [setTransactions]: (state, action) => {
    const { transactions } = action.payload;

    return {
      ...state,
      transactions: arrayToObjectById(transactions)
    };
  },
  [setAccounts]: (state, action) => {
    const { accounts } = action.payload;

    return {
      ...state,
      accounts: arrayToObjectById(accounts)
    };
  },
  [setCategories]: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories: arrayToObjectById(categories)
    };
  },
  [setSelectedAccount]: (state, action) => ({
    ...state,
    selectedAccount: action.payload.accountId
  }),
  [setViewType]: (state, { payload: { viewType }}) => ({
    ...state,
    viewType
  })
}, initialState);

export default transactionsList;
