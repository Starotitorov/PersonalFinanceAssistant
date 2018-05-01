import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { createTransfer } from '../PersistGate/actions';

export const addTransfer = transferData => dispatch => {
  const transfer = {
    ...transferData,
    exchangeRate: Number(transferData.exchangeRate),
    value: Number(transferData.value)
  };

  dispatch(createTransfer(transfer));

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
