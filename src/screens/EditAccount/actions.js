import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const setAccount = createAction(
  'EDIT_ACCOUNT/SET_ACCOUNT',
  account => ({ account })
);

export const updateAccount = accountData => (dispatch, getState) => {
  const { editAccount: { account: { id }}} = getState();

  return api.updateAccount(id, accountData)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'AccountsList' })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
