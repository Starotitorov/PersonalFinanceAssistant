import React from 'react';
import { View } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';
import styles from './AccountsListStyles';

const AccountsListScreen = ({
  accounts,
  addAccount,
  editAccount
}) =>
  <View style={ styles.container }>
    <AccountsList
      accounts={ accounts }
      onSelectAccount={ editAccount } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addAccount } />
  </View>;

export default AccountsListScreen;
