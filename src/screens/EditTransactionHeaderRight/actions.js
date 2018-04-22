import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const removeTransaction = id => dispatch => api.removeTransaction(id)
  .then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Transactions' })
      ]
    }));
  })
  .catch(() => alerts.showCanNotPerformOperationAlert());
