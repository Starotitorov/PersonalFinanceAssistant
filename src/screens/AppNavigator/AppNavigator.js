import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LogOutIcon } from 'src/components';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import HomeDrawerNavigator from '../HomeDrawerNavigator';

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
    initialRouteName: 'Home'
});

export const AppRouter = AppNavigator.router;

export default AppNavigator;
