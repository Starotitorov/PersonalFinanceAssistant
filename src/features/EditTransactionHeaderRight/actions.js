import { NavigationActions } from 'react-navigation';
import { deleteTransaction } from '../../services/database';

export const removeTransaction = id => async dispatch => {
  await deleteTransaction(id);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Transactions' })
    ]
  }));
};
