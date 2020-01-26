import { NavigationActions } from 'react-navigation';

let _navigator;

export const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

export const navigateToLogInScreen = () => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: 'Auth',
      action: NavigationActions.navigate({
        routeName: 'LogIn'
      })
    })
  );
};

export const navigateToTransactionsScreen = () => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: 'App',
      action: NavigationActions.navigate({
        routeName: 'Transactions'
      })
    })
  );
};
