import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import AccountsNavigator from '../AccountsNavigator';
import { DrawerIcon } from 'src/components';
import {colors } from 'src/styles'

export default DrawerNavigator({
    Accounts: {
        screen: AccountsNavigator,
        navigationOptions: {
            drawerLabel: 'Accounts',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="credit-card" tintColor={tintColor} />

        }
    }
}, {
    initialRouteName: 'Accounts',
    contentOptions: {
        activeTintColor: colors.COLOR_PRIMARY,
    }
});
