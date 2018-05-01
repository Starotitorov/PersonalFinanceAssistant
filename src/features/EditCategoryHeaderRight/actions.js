import { NavigationActions } from 'react-navigation';
import { deleteCategory } from '../../services/database';

export const removeCategory = id => async dispatch => {
  await deleteCategory(id);

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
