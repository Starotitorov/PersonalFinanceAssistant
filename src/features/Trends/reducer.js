import { handleActions } from 'redux-actions';
import moment from 'moment';
import {
  setDateRange,
  setExchangeRates,
  fetchTrendsDataSuccess,
  fetchTrendsDataFailure,
  fetchTrendsDataStart,
  setTrendsData
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  categories: {
    byId: {},
    order: []
  },
  accounts: {
    byId: {},
    order: []
  },
  exchangeRates: {},
  dateRange: {
    to: moment().utc().valueOf(),
    from: moment().subtract(3, 'month').utc().valueOf()
  },
  fetching: false,
  error: false
};

const trends = handleActions({
  [fetchTrendsDataStart]: state => ({
    ...state,
    fetching: true,
    error: false
  }),
  [fetchTrendsDataSuccess]: state => ({
    ...state,
    fetching: false,
    error: false
  }),
  [fetchTrendsDataFailure]: state => ({
    ...state,
    fetching: false,
    error: true
  }),
  [setDateRange]: (state, { payload: { dateRange }}) => ({ ...state, dateRange }),
  [setExchangeRates]: (state, { payload: { exchangeRates }}) => ({ ...state, exchangeRates }),
  [setTrendsData]: (state, { payload: { accounts, categories, transactions }}) => ({
    ...state,
    accounts: arrayToObjectById(accounts),
    categories: arrayToObjectById(categories),
    transactions: arrayToObjectById(transactions)
  })
}, initialState);

export default trends;
