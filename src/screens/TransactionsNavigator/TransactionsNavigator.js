/*
 * TransactionsNavigator.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerButton } from 'src/components';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';
import TransactionsHeaderTitle from '../TransactionsHeaderTitle';
import Transactions from '../Transactions';
import SwitchViewTypeIcon from '../Transactions/components/SwitchViewTypeIcon';
import AddTransaction from '../AddTransaction';
import EditTransaction from '../EditTransaction';
import EditTransactionHeaderRight from '../EditTransactionHeaderRight';

const styles = StyleSheet.create({
  transactionsHeaderTitleContainerStyle: {
    left: 50,
    right: 50
  }
});

export default createStackNavigator({
  Transactions: {
    screen: Transactions,
    navigationOptions: ({ navigation }) => ({
      title: 'Transactions',
      headerTitle: <TransactionsHeaderTitle />,
      headerLeft: <DrawerButton navigation={ navigation } />,
      headerRight: <SwitchViewTypeIcon />,
      headerTitleAlign: 'left',
      headerTitleContainerStyle: styles.transactionsHeaderTitleContainerStyle
    })
  },
  EditTransaction: {
    screen: EditTransaction,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit transaction',
      headerRight: <EditTransactionHeaderRight navigation={ navigation } />
    })
  },
  AddTransaction: {
    screen: AddTransaction,
    navigationOptions: {
      title: 'Add transaction'
    }
  }
}, {
  initialRouteName: 'Transactions',
  defaultNavigationOptions: getDefaultNavigationOptions()
});
