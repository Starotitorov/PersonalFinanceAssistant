import React from 'react';
import { ScrollView } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';
import styles from './AccountsListStyles';

const AccountsListScreen = ({
  accounts,
  addAccount,
  editAccount
}) =>
  <ScrollView contentContainerStyle={ styles.container }>
    <AccountsList
      accounts={ accounts }
      onSelectAccount={ editAccount } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addAccount } />
  </ScrollView>;

export default AccountsListScreen;
