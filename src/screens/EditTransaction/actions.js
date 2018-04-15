import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setTransaction = createAction(
  'EDIT_TRANSACTION/SET_TRANSACTION',
  transaction => ({ transaction })
);

export const fetchTransactionStart = createAction('EDIT_TRANSACTION/FETCH_TRANSACTION_START');
export const fetchTransactionFailure = createAction('EDIT_TRANSACTION/FETCH_TRANSACTION_FAILURE');

export const fetchTransaction = id => dispatch => {
  dispatch(fetchTransactionStart());

  return api.getTransaction(id)
    .then(({ transaction }) => dispatch(setTransaction(transaction)))
    .catch(e => dispatch(fetchTransactionFailure(e)));
};

export const updateTransaction = transactionData => (dispatch, getState) => {
  const { editTransaction: { transaction: { id }}} = getState();
  const transaction = {
    ...transactionData,
    value: Number(transactionData.value)
  };

  return api.updateTransaction(id, transaction)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Transactions' })
        ]
      }));
    });
};
