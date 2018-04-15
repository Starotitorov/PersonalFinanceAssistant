import { NavigationActions } from 'react-navigation';
import { getAllAccounts } from '../AccountsList/selectors';

export const handleAddTransfer = () => (dispatch, getState) => {
  const accounts = getAllAccounts(getState());

  dispatch(NavigationActions.navigate({ routeName: 'AddTransfer', params: { accounts }}));
};
