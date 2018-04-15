import { NavigationActions } from 'react-navigation';

export const addCategory = () => dispatch => {
  dispatch(NavigationActions.navigate({
    routeName: 'AddCategory'
  }));
};
