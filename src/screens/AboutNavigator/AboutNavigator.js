import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import About from '../About';

export default StackNavigator({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'About',
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    }
}, {
    initialRouteName: 'About'
});
