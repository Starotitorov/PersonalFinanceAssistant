/*
 * TransactionsListItemStyles.js
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
import { margins, colors } from 'src/styles';

export default StyleSheet.create({
  arrow: {
    marginRight: margins.MARGIN_M,
    fontSize: 18
  },
  borderTop: {
    borderTopColor: colors.SILVER,
    borderTopWidth: 1
  },
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: colors.SILVER,
    borderBottomWidth: 1
  },
  textContainer: {
    flex: 1
  },
  categoryName: {
    fontSize: 14
  },
  transactionsSum: {
    marginLeft: 10,
    fontSize: 14
  },
  rightText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 135
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: margins.MARGIN_S
  }
});
