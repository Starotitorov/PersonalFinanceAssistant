import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LogOutIcon } from 'src/components';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Home from '../Home';

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
        screen: Home,
        navigationOptions: {
            headerRight: <LogOutIcon />,
            title: 'Home'
        }
    }
});

export const AppRouter = AppNavigator.router;

export default AppNavigator;
