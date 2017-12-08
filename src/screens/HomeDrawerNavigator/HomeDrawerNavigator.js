import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import { DrawerIcon } from 'src/components';
import { colors } from 'src/styles'
import AccountsNavigator from '../AccountsNavigator';
import CategoriesNavigator from '../CategoriesNavigator';
import Settings from '../Settings'

export default DrawerNavigator({
    Accounts: {
        screen: AccountsNavigator,
        navigationOptions: {
            drawerLabel: 'Accounts',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="credit-card" tintColor={tintColor} />

        }
    },
    Categories: {
        screen: CategoriesNavigator,
        navigationOptions: {
            drawerLabel: 'Categories',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="sort" tintColor={tintColor} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="settings" tintColor={tintColor} />
        }
    }
}, {
    initialRouteName: 'Accounts',
    contentOptions: {
        activeTintColor: colors.COLOR_PRIMARY,
    }
});
