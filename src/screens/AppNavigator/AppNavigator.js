import { StackNavigator } from 'react-navigation';
import LogIn from '../LogIn';

const AppNavigator = StackNavigator({
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            title: 'Log in'
        }
    }
});

export const AppRouter = AppNavigator.router;

export default AppNavigator;
