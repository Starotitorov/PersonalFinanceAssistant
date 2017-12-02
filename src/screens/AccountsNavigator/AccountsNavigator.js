import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, RemoveHeaderIcon } from 'src/components';
import AccountsList from '../AccountsList';
import AddAccount from '../AddAccount';

export default StackNavigator({
    AccountsList: {
        screen: AccountsList,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Accounts',
                headerLeft: <DrawerButton navigation={navigation} />,
            }
        }
    },
    AddAccount: {
        screen: AddAccount,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'New account',
            };
        }
    }
}, {
    initialRouteName: 'AccountsList'
});
