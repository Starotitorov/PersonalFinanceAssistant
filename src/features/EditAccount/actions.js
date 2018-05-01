import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { editAccount } from '../../services/database';

export const setAccount = createAction(
  'EDIT_ACCOUNT/SET_ACCOUNT',
  account => ({ account })
);

export const updateAccount = accountData => async (dispatch, getState) => {
  const { editAccount: { account: { id }}} = getState();

  await editAccount(id, accountData);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
