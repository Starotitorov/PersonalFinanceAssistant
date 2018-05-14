import moment from 'moment';
import { handleActions, combineActions } from 'redux-actions';
import { arrayToObjectById } from 'src/utils';
import {
  changeCurrentDate,
  setPeriodView,
  fetchTransactionsListDataStart,
  fetchTransactionsListDataFailure,
  fetchTransactionsListDataSuccess,
  setTransactions,
  setCategories,
  setAccounts,
  setSelectedAccount,
  setViewType,
  fetchTransactionsStart,
  fetchTransactionsFailure,
  resetTransactions
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
  selectedAccount: null,
  transactionsFetching: false,
  fetchTransactionsRequestId: null,
  viewType: LIST
};

const transactionsList = handleActions({
  [changeCurrentDate]: (state, action) => ({
    ...state,
    currentDate: action.payload.currentDate
  }),
  [setPeriodView]: (state, action) => ({
    ...state,
    periodType: action.payload.periodType
  }),
  [fetchTransactionsListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [fetchTransactionsStart]: (state, { payload }) => ({
    ...state,
    fetchTransactionsRequestId: payload,
    transactionsFetching: true
  }),
  [fetchTransactionsFailure]: state => ({
    ...state,
    transactionsFetching: false
  }),
  [combineActions(
    fetchTransactionsListDataSuccess,
    fetchTransactionsListDataFailure
  )](state) {
    return {
      ...state,
      fetching: false
    };
  },
  [setTransactions]: (state, action) => {
    const { transactions } = action.payload;

    return {
      ...state,
      transactions: arrayToObjectById(transactions),
      transactionsFetching: false
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
  }),
  [resetTransactions]: state => ({ ...state, transactions: arrayToObjectById([]) })
}, initialState);

export default transactionsList;
