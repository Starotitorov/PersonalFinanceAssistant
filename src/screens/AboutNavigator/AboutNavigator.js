import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import About from '../About';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerLeft: <DrawerButton navigation={ navigation } />
    })
  }
}, {
  initialRouteName: 'About',
  navigationOptions: getDefaultNavigationOptions()
});
