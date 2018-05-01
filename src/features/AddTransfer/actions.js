import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { createTransfer } from '../../services/database';

export const addTransfer = transferData => async dispatch => {
  const transfer = {
    ...transferData,
    exchangeRate: Number(transferData.exchangeRate),
    value: Number(transferData.value)
  };

  await createTransfer(transfer);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};

export const setAccounts = createAction(
  'ADD_TRANSFER/SET_ACCOUNTS',
  accounts => ({ accounts })
);
