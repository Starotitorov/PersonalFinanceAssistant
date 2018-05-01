import { NavigationActions } from 'react-navigation';
import { deleteAccount } from '../../services/database';

export const removeAccount = id => async dispatch => {
  await deleteAccount(id);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
