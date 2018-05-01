import { NavigationActions } from 'react-navigation';
import { createAccount } from '../../services/database';

export const addAccount = accountData => async dispatch => {
  const data = {
    ...accountData,
    initialBalance: Number(accountData.initialBalance)
  };

  await createAccount(data);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'AccountsList' })
    ]
  }));
};
