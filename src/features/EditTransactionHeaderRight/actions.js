import { NavigationActions } from 'react-navigation';
import { deleteTransaction } from '../PersistGate/actions';

export const removeTransaction = id => dispatch => {
  dispatch(deleteTransaction(id));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Transactions' })
    ]
  }));
};
