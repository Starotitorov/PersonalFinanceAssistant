import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { editTransaction } from '../PersistGate/actions';

export const setTransaction = createAction(
  'EDIT_TRANSACTION/SET_TRANSACTION',
  transaction => ({ transaction })
);

export const updateTransaction = transactionData => (dispatch, getState) => {
  const { editTransaction: { transaction: { id }}} = getState();
  const transaction = {
    ...transactionData,
    value: Number(transactionData.value)
  };

  dispatch(editTransaction(id, transaction));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Transactions' })
    ]
  }));
};
