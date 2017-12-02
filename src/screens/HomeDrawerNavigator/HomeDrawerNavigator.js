import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import AccountsNavigator from '../AccountsNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors } from 'src/styles'

export default DrawerNavigator({
    Accounts: {
        screen: AccountsNavigator,
        navigationOptions: {
            drawerLabel: 'Accounts',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="credit-card"
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
}, {
    initialRouteName: 'Accounts',
    contentOptions: {
        activeTintColor: colors.COLOR_PRIMARY,
    }
});
