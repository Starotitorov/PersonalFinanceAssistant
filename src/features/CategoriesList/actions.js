import { NavigationActions } from 'react-navigation';

export const selectCategory = id => (dispatch, getState) => {
  const { storage: { categories: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditCategory',
    params: {
      category: byId[id]
    }
  }));
};
