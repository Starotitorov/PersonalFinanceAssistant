import { createAction } from 'redux-actions';

export const createTransaction = createAction('TRANSACTIONS/CREATE_TRANSACTION');

export const editTransaction = createAction(
  'TRANSACTIONS/EDIT_TRANSACTION',
  (id, transaction) => ({ id, transaction })
);

export const deleteTransaction = createAction('TRANSACTIONS/DELETE_TRANSACTION');

export const setTransactions = createAction('TRANSACTIONS/SET_TRANSACTIONS');

export const resetTransactions = createAction('TRANSACTIONS/RESET_TRANSACTIONS');
