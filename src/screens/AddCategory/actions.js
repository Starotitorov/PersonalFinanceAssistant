import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const addCategory = categoryData => dispatch => api.addCategory(categoryData)
  .then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'CategoryTabs' })
      ]
    }));
  })
  .catch(() => alerts.showCanNotPerformOperationAlert());
