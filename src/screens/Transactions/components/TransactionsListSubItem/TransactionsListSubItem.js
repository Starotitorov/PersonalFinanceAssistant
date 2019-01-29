/*
 * TransactionsListSubItem.js
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
import { View, Text, TouchableOpacity } from 'react-native';
import { momentFormat } from 'src/utils';
import styles from './TransactionsListSubItemStyles';
import { getSumString } from '../../helpers';

const formatDate = momentFormat.formatTransactionDate;

const TransactionsListSubItem = ({ item: { date, value, currency, note }, handleSelectTransaction }) =>
  <TouchableOpacity onPress={ handleSelectTransaction }>
    <View style={ styles.subItemContainer }>
      <View style={ styles.subItemMain }>
        <View style={ styles.subItemDateContainer }>
          <Text>{ formatDate(date) }</Text>
        </View>
        <Text>{ getSumString(value, currency) }</Text>
      </View>
      { note && <Text style={ styles.subItemNote }>{ note }</Text> }
    </View>
  </TouchableOpacity>;

export default TransactionsListSubItem;
