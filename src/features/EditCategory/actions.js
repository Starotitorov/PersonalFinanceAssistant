import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import { editCategory } from '../PersistGate/actions';

export const setCategory = createAction(
  'EDIT_CATEGORY/SET_CATEGORY',
  category => ({ category })
);

export const updateCategory = categoryData => (dispatch, getState) => {
  const { editCategory: { category: { id }}} = getState();

  dispatch(editCategory(id, categoryData));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
