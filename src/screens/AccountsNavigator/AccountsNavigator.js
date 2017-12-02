import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton, RemoveHeaderIcon } from 'src/components';
import AccountsList from '../AccountsList';

export default StackNavigator({
    AccountsList: {
        screen: AccountsList,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Accounts',
                headerLeft: <DrawerButton navigation={navigation} />,
                headerRight: <RemoveHeaderIcon />
            }
        }
    }
}, {
    initialRouteName: 'AccountsList'
})
