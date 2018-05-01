import { AppRouter } from './AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppRouter.getStateForAction(AppRouter.getStateForAction(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Transactions'
    })
  ]
})));

const navigation = (state = initialState, action) => {
  const nextState = AppRouter.getStateForAction(action, state);

  return nextState || state;
};

export default navigation;
