import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

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

  return api.updateTransaction(id, transaction)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Transactions' })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
