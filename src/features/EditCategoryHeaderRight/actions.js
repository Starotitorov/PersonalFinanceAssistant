import { NavigationActions } from 'react-navigation';
import { deleteCategory } from '../PersistGate/actions';

export const removeCategory = id => dispatch => {
  dispatch(deleteCategory(id));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
