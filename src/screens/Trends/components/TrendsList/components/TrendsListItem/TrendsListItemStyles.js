/*
 * TrendsListItemStyles.js
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

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray'
  },
  labelStyle: {
    flex: 1,
    fontSize: 16,
    color: 'gray'
  },
  boldTextStyle: {
    fontWeight: 'bold'
  },
  totalsStyle: {
    flex: 1,
    alignItems: 'flex-end'
  },
  incomeStyle: {
    color: 'red'
  },
  expenseStyle: {
    color: 'blue'
  }
});

export default styles;
