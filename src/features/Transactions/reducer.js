import moment from 'moment';
import { handleActions } from 'redux-actions';
import {
  changeCurrentDate,
  changePeriodView,
  setSelectedAccount,
  setViewType,
  setTransactionsListData,
  fetchTransactionsListDataStart,
  fetchTransactionsListDataFailure
} from './actions';
import { periodTypes, LIST } from './constants';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  accounts: {
    byId: {},
    order: []
  },
  categories: {
    byId: {},
    order: []
  },
  transactions: {
    byId: {},
    order: []
  },
  fetching: false,
  currentDate: moment(),
  periodType: periodTypes.WEEK.value,
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
  [setSelectedAccount]: (state, action) => ({
    ...state,
    selectedAccount: action.payload.accountId
  }),
  [setViewType]: (state, { payload: { viewType }}) => ({
    ...state,
    viewType
  }),
  [fetchTransactionsListDataStart]: state => ({ ...state, fetching: true }),
  [fetchTransactionsListDataFailure]: state => ({ ...state, fetching: false }),
  [setTransactionsListData]: (state, { payload: { accounts, categories, transactions }}) => ({
    ...state,
    accounts: arrayToObjectById(accounts),
    categories: arrayToObjectById(categories),
    transactions: arrayToObjectById(transactions),
    fetching: false
  })
}, initialState);

export default transactionsList;
