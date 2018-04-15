import { StackNavigator } from 'react-navigation';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import HomeDrawerNavigator from '../HomeDrawerNavigator';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

const AppNavigator = StackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: 'Log in'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign up'
    }
  },
  Home: {
    screen: HomeDrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: getDefaultNavigationOptions()
});

export const AppRouter = AppNavigator.router;

export default AppNavigator;
