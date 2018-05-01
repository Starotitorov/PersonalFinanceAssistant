import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import AccountsList from '../AccountsList';
import AddAccount from '../AddAccount';
import EditAccount from '../EditAccount';
import AddTransfer from '../AddTransfer';
import EditAccountHeaderRight from '../EditAccountHeaderRight';
import AccountsListHeaderRight from '../AccountsListHeaderRight';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';

export default StackNavigator({
  AccountsList: {
    screen: AccountsList,
    navigationOptions: ({ navigation }) => ({
      title: 'Accounts',
      headerLeft: <DrawerButton navigation={ navigation } />,
      headerRight: <AccountsListHeaderRight />
    })
  },
  AddAccount: {
    screen: AddAccount,
    navigationOptions: {
      title: 'New account'
    }
  },
  EditAccount: {
    screen: EditAccount,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit account',
      headerRight: <EditAccountHeaderRight navigation={ navigation } />
    })
  },
  AddTransfer: {
    screen: AddTransfer,
    navigationOptions: {
      title: 'Add transfer'
    }
  }
}, {
  initialRouteName: 'AccountsList',
  navigationOptions: getDefaultNavigationOptions()
});
