import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import Currency from '../Currency';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
  Currency: {
    screen: Currency,
    navigationOptions: ({ navigation }) => ({
      title: 'Exchange rates',
      headerLeft: <DrawerButton navigation={ navigation } />
    })
  }
}, {
  initialRouteName: 'Currency',
  navigationOptions: getDefaultNavigationOptions()
});
