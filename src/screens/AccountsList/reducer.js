import { handleActions, combineActions } from 'redux-actions';
import {
  setAccounts,
  fetchAccountsListDataStart,
  fetchAccountListDataSuccess,
  fetchAccountsListDataFailure
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  accounts: {
    byId: {},
    order: []
  },
  fetching: false,
};

const accountsList = handleActions({
  [fetchAccountsListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [combineActions(
    fetchAccountsListDataFailure,
    fetchAccountListDataSuccess,
  )](state) {
    return {
      ...state,
      fetching: false,
      refreshing: false
    };
  },
  [setAccounts]: (state, action) => {
    const { accounts } = action.payload;

    return {
      ...state,
      accounts: arrayToObjectById(accounts)
    };
  }
}, initialState);

export default accountsList;
