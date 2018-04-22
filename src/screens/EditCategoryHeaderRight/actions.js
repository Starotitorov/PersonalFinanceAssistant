import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const removeCategory = id => dispatch => api.removeCategory(id)
  .then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'CategoryTabs' })
      ]
    }));
  })
  .catch(() => alerts.showCanNotPerformOperationAlert());
