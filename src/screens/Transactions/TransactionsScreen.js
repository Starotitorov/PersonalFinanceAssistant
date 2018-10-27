/*
 * TransactionsScreen.js
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
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ActionButton } from 'src/components';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';
import TransactionsListRepresentation from './components/TransactionsListRepresentation';
import styles from './TransactionsScreenStyles';

const TransactionsScreen = ({
  currentDate,
  changeDateForward,
  changeDateBack,
  addTransaction,
  viewType,
  refreshTransactionsListData,
  refreshing,
  selectTransaction
}) =>
  <View style={ styles.container }>
    <TransactionsPeriodCarousel
      currentDate={ currentDate }
      onPressBack={ changeDateBack }
      onPressForward={ changeDateForward } />
    <TransactionsListRepresentation
      viewType={ viewType }
      refreshing={ refreshing }
      onRefresh={ refreshTransactionsListData }
      onSelectTransaction={ selectTransaction } />
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addTransaction } />
  </View>;

TransactionsScreen.propTypes = {
  currentDate: PropTypes.string,
  changeDateForward: PropTypes.func,
  changeDateBack: PropTypes.func,
  addTransaction: PropTypes.func,
  viewType: PropTypes.string,
  refreshTransactionsListData: PropTypes.func,
  refreshing: PropTypes.bool,
  selectTransaction: PropTypes.func
};

export default TransactionsScreen;
