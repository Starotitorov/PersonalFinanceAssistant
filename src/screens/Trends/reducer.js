import { handleActions, combineActions } from 'redux-actions';
import moment from 'moment';
import {
  fetchTrendsDataStart,
  fetchTrendsDataSuccess,
  fetchTrendsDataFailure,
  setTransactions,
  setDateRange
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  dateRange: {
    to: moment().utc().valueOf(),
    from: moment().subtract(3, 'month').utc().valueOf()
  },
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
  [setDateRange]: (state, { payload: { dateRange }}) => ({ ...state, dateRange })
}, initialState);

export default trends;
