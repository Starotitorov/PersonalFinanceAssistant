import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const removeAccount = id => dispatch => api.removeAccount(id)
  .then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'AccountsList' })
      ]
    }));
  })
  .catch(() => alerts.showCanNotPerformOperationAlert());
