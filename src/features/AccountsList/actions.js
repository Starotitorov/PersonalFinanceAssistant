import { NavigationActions } from 'react-navigation';

export const addAccount = id => dispatch => {
  dispatch(NavigationActions.navigate({ routeName: 'AddAccount' }));
};

export const editAccount = id => (dispatch, getState) => {
  const { storage: { accounts: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditAccount',
    params: {
      account: byId[id]
    }
  }));
};
