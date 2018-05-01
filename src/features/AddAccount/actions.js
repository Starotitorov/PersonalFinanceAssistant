import { NavigationActions } from 'react-navigation';
import { createAccount } from '../PersistGate/actions';

export const addAccount = accountData => dispatch => {
  const data = {
    ...accountData,
    initialBalance: Number(accountData.initialBalance)
  };

  dispatch(createAccount(data));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
