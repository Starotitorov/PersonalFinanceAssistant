import { NavigationActions } from 'react-navigation';
import { createCategory } from '../../services/database';

export const addCategory = categoryData => async dispatch => {
  await createCategory(categoryData);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
