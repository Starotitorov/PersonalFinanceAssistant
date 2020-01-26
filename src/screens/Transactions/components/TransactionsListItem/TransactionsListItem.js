/*
 * TransactionsListItem.js
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
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TransactionsListItemStyles';
import { getSumString } from '../../helpers';

const TransactionsListItem = ({
  isOpen,
  borderTop,
  data: { transactions, category },
  renderSubItems,
  toggleOpen
}) =>
  <View>
    <TouchableOpacity onPress={ toggleOpen }>
      <View style={[styles.groupContainer, borderTop && styles.borderTop]}>
        <Icon
          style={ styles.arrow }
          name={ isOpen ? 'ios-arrow-up' : 'ios-arrow-down' } />
        <MaterialCommunityIcon
          style={ styles.categoryIcon }
          name={ category.icon ? category.icon : undefined } />
        <View style={ styles.textContainer }>
          <Text style={ styles.categoryName }>{ category.name }</Text>
        </View>
        <View style={ styles.rightText }>
          <Badge value={ transactions.length } />
          <Text style={ styles.transactionsSum }>
            { getSumString(category.sum, category.currency) }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    { isOpen && renderSubItems() }
  </View>;

export default TransactionsListItem;
