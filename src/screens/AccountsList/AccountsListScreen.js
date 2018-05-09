import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';
import styles from './AccountsListStyles';
import { colors } from 'src/styles';

const AccountsListScreen = ({
  refreshAccountsListData,
  refreshing,
  accounts,
  addAccount,
  editAccount
}) =>
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={ refreshing }
        colors={ [colors.COLOR_PRIMARY] }
        onRefresh={ refreshAccountsListData } />
    }
    contentContainerStyle={ styles.container }>
    <AccountsList
      accounts={ accounts }
      onSelectAccount={ editAccount } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addAccount } />
  </ScrollView>;

export default AccountsListScreen;
