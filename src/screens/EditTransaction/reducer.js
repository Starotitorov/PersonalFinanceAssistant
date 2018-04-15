import { handleActions } from 'redux-actions';
import {
  setTransaction,
  fetchTransactionStart,
  fetchTransactionFailure
} from './actions';

const initialState = {
  transaction: {},
  fetching: false
};

const addTransaction = handleActions({
  [fetchTransactionStart]: state => ({
    ...state,
    fetching: true
  }),
  [fetchTransactionFailure]: state => ({
    ...state,
    fetching: false
  }),
  [setTransaction]: (state, { payload: { transaction }}) => ({
    transaction,
    fetching: false
  })
}, initialState);

export default addTransaction;
