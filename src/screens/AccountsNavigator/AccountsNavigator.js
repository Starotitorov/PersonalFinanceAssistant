import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, LogOutIcon } from 'src/components';
import AccountsList from '../AccountsList';
import AddAccount from '../AddAccount';
import EditAccount from '../EditAccount';
import EditAccountHeaderRight from '../EditAccountHeaderRight';

export default StackNavigator({
    AccountsList: {
        screen: AccountsList,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Accounts',
                headerLeft: <DrawerButton navigation={navigation} />,
                headerRight: <LogOutIcon />
            }
        }
    },
    AddAccount: {
        screen: AddAccount,
        navigationOptions: {
            title: 'New account'
        }
    },
    EditAccount: {
        screen: EditAccount,
        navigationOptions: {
            title: 'Edit account',
            headerRight: <EditAccountHeaderRight />
        }
    }
}, {
    initialRouteName: 'AccountsList'
});
