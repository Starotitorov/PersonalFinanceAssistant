import { NavigationActions } from 'react-navigation';

export const selectCategory = id => (dispatch, getState) => {
  const { categoriesList: { categories: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditCategory',
    params: {
      category: byId[id]
    }
  }));
};
