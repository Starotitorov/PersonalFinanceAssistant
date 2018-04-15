import { handleActions } from 'redux-actions';
import {
  setAccount,
  fetchAccountStart,
  fetchAccountFailure
} from './actions';

const initialState = {
  account: {},
  fetching: false
};

const editAccount = handleActions({
  [setAccount]: (state, { payload: { account }}) => ({
    account,
    fetching: false
  }),
  [fetchAccountStart]: state => ({
    ...state,
    fetching: true
  }),
  [fetchAccountFailure]: state => ({
    ...state,
    fetching: false
  })
}, initialState);

export default editAccount;
