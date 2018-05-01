import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { editAccount } from '../PersistGate/actions';

export const setAccount = createAction(
  'EDIT_ACCOUNT/SET_ACCOUNT',
  account => ({ account })
);

export const updateAccount = accountData => (dispatch, getState) => {
  const { editAccount: { account: { id }}} = getState();

  dispatch(editAccount(id, accountData));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
