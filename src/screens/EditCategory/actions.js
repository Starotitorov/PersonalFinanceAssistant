import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const setCategory = createAction(
  'EDIT_CATEGORY/SET_CATEGORY',
  category => ({ category })
);

export const updateCategory = categoryData => (dispatch, getState) => {
  const { editCategory: { category: { id }}} = getState();

  return api.updateCategory(id, categoryData)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'CategoryTabs' })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
