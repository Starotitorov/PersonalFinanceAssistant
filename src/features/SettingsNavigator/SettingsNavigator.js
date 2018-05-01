import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Settings from '../Settings';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <DrawerButton navigation={ navigation } />
    })
  }
}, {
  initialRouteName: 'Settings',
  navigationOptions: getDefaultNavigationOptions()
});
