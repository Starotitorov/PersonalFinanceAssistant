/*
 * TrendsDateRangePickerStyles.js
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

export default StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pickerStyle: {
    width: '45%'
  },
  button: {
    alignSelf: 'flex-start',
    width: '45%',
    marginTop: 8,
    marginLeft: 0
  },
  buttonInner: {
    paddingTop: 8,
    paddingBottom: 8
  }
});
