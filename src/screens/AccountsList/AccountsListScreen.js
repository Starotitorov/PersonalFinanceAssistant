import React from 'react';
import { View } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';
import styles from './AccountsListStyles';

const AccountsListScreen = ({
  refreshAccountsListData,
  refreshing,
  accounts,
  addAccount,
  editAccount
}) =>
  <View style={ styles.container }>
    <AccountsList
      refreshing={ refreshing }
      accounts={ accounts }
      onSelectAccount={ editAccount }
      onRefresh={ refreshAccountsListData } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addAccount } />
  </View>;

export default AccountsListScreen;
