import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Settings from '../Settings';
import ChangePassword from '../ChangePassword';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Settings',
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: () => {
            return {
                title: 'Change password'
            }
        }
    }
}, {
    initialRouteName: 'Settings',
    navigationOptions: getDefaultNavigationOptions()
});
