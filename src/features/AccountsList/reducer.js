import { handleActions } from 'redux-actions';
import {
  fetchAccountsListDataFailure,
  fetchAccountsListDataStart,
  setAccountsListData
} from './actions';
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
  transfers: {
    byId: {},
    order: []
  },
  fetching: false
};

const accountsList = handleActions({
  [fetchAccountsListDataStart]: state => ({ ...state, fetching: true }),
  [fetchAccountsListDataFailure]: state => ({ ...state, fetching: false }),
  [setAccountsListData]: (state, { payload: { accounts, categories, transactions, transfers }}) => ({
    ...state,
    accounts: arrayToObjectById(accounts),
    categories: arrayToObjectById(categories),
    transactions: arrayToObjectById(transactions),
    transfers: arrayToObjectById(transfers),
    fetching: false
  })
}, initialState);

export default accountsList;
