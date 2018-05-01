import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { editCategory } from '../../services/database';

export const setCategory = createAction(
  'EDIT_CATEGORY/SET_CATEGORY',
  category => ({ category })
);

export const updateCategory = categoryData => async (dispatch, getState) => {
  const { editCategory: { category: { id }}} = getState();

  await editCategory(id, categoryData);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
