import { NavigationActions } from 'react-navigation';
import { createCategory } from '../PersistGate/actions';

export const addCategory = categoryData => dispatch => {
  dispatch(createCategory(categoryData));

  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'CategoryTabs' })
    ]
  }));
};
