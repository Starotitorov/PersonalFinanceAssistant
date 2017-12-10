import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Settings from '../Settings';

export default StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Settings',
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    }
}, {
    initialRouteName: 'Settings'
});
