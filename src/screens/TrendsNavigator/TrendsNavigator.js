import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Trends from '../Trends';

export default StackNavigator({
    Trends: {
        screen: Trends,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Trends',
                headerLeft: <DrawerButton navigation={navigation} />
            }
        }
    }
}, {
    initialRouteName: 'Trends'
});
