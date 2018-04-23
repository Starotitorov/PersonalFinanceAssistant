import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';
import Trends from '../Trends';

export default StackNavigator({
  Trends: {
    screen: Trends,
    navigationOptions: ({ navigation }) => ({
      title: 'Trends',
      headerLeft: <DrawerButton navigation={ navigation } />
    })
  }
}, {
  initialRouteName: 'Trends',
  navigationOptions: getDefaultNavigationOptions()
});
