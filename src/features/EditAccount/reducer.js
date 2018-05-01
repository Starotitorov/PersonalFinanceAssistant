import { handleActions } from 'redux-actions';
import { setAccount } from './actions';

const initialState = {
  account: {}
};

const editAccount = handleActions({
  [setAccount]: (state, { payload: { account }}) => ({
    account
  })
}, initialState);

export default editAccount;
