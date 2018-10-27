/*
 * TrendsListItem.js
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
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';
import { View, Text } from 'react-native';
import styles from './TrendsListItemStyles';

const TrendsListItem = ({ label, labelBold, income = 0, expense = 0, bordered = true }) => (
  <View style={ [styles.rootStyle, bordered && styles.borderStyle] }>
    <Text style={ [styles.labelStyle, labelBold && styles.boldTextStyle] }>
      { label }
    </Text>
    <View style={ styles.totalsStyle }>
      <Text style={ styles.incomeStyle }>+{ income } { DEFAULT_BASE_CURRENCY }</Text>
      <Text style={ styles.expenseStyle }>-{ expense } { DEFAULT_BASE_CURRENCY }</Text>
    </View>
  </View>
);

export default TrendsListItem;
