import { NavigationActions } from 'react-navigation';
import { deleteAccount } from '../PersistGate/actions';

export const removeAccount = id => dispatch => {
  dispatch(deleteAccount(id));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
