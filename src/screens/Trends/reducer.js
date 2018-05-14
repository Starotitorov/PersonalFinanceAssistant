import { handleActions, combineActions } from 'redux-actions';
import {
  fetchTrendsDataStart,
  fetchTrendsDataSuccess,
  fetchTrendsDataFailure,
  setTransactions,
  setExchangeRates,
  setDateRange,
  resetTransactions
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  dateRange: {},
  exchangeRates: {},
  fetching: false
};

const trends = handleActions({
  [fetchTrendsDataStart]: state => ({
    ...state,
    fetching: true
  }),
  [combineActions(fetchTrendsDataSuccess, fetchTrendsDataFailure)]: state => ({
    ...state,
    fetching: false
  }),
  [setTransactions]: (state, action) => {
    const { transactions } = action.payload;

    return {
      ...state,
      transactions: arrayToObjectById(transactions)
    };
  },
  [setDateRange]: (state, { payload: { dateRange }}) => ({ ...state, dateRange }),
  [setExchangeRates]: (state, { payload: { exchangeRates }}) => ({ ...state, exchangeRates }),
  [resetTransactions]: state => ({ ...state, transactions: arrayToObjectById([]) })
}, initialState);

export default trends;
