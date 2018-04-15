import { NavigationActions } from 'react-navigation';
import { LoginManager } from 'react-native-fbsdk';
import { resetCurrentUser } from '../LogIn/actions';

export const logout = () => async dispatch => {
  dispatch(resetCurrentUser());

  LoginManager.logOut();

  dispatch(NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({ routeName: 'LogIn' })
    ]
  }));
};

export const handleChangePassword = () => dispatch => {
  dispatch(NavigationActions.navigate({ routeName: 'ChangePassword' }));
};
