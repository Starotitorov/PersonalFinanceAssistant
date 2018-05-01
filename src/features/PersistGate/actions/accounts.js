import { createAction } from 'redux-actions';
import { getAllTransactions } from '../selectors/transactions';
import { setTransactions } from './transactions';

export const createAccount = createAction('ACCOUNTS/CREATE_ACCOUNT');

export const editAccount = createAction(
  'ACCOUNTS/EDIT_ACCOUNT',
  (id, account) => ({ id, account })
);

export const deleteAccountFromList = createAction(
  'ACCOUNTS/DELETE_ACCOUNT_FROM_LIST'
);

export const resetAccounts = createAction('ACCOUNTS/RESET_ACCOUNTS');

export const deleteAccount = id => (dispatch, getState) => {
  const transactions = getAllTransactions(getState());

  const newTransactionsList = transactions.filter(transaction => transaction.accountId !== id);

  dispatch(setTransactions(newTransactionsList));

  dispatch(deleteAccountFromList(id));
};
