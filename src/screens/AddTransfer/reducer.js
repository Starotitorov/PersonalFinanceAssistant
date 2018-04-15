import { handleActions } from 'redux-actions';
import {
  setAccounts
} from './actions';

const initialState = {
  accounts: []
};

const addTransfer = handleActions({
  [setAccounts]: (state, action) => {
    const { accounts } = action.payload;

    return {
      ...state,
      accounts
    };
  }
}, initialState);

export default addTransfer;
