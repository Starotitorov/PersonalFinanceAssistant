import { StackNavigator } from 'react-navigation';
import LogIn from '../LogIn';
import SignUp from '../SignUp';

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
    }
});

export const AppRouter = AppNavigator.router;

export default AppNavigator;
