import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';
import Trends from '../Trends';
import TrendsHeaderTitle from '../TrendsHeaderTitle';

export default StackNavigator({
    Trends: {
        screen: Trends,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Trends',
                headerLeft: <DrawerButton navigation={navigation} />,
                headerTitle: <TrendsHeaderTitle />
            }
        }
    }
}, {
    initialRouteName: 'Trends',
    navigationOptions: getDefaultNavigationOptions()
});
