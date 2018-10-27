/*
 * CalculatorStyles.js
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
import { colors } from 'src/styles';

const styles = StyleSheet.create({
  expressionContainerStyle: {
    height: 48,
    padding: 8,
    backgroundColor: 'lightgray'
  },
  expressionStyle: {
    fontSize: 24,
    textAlign: 'right'
  },
  keyboardRowStyle: {
    flexDirection: 'row',
    left: 0,
    right: 0
  },
  keyboardShortRowStyle: {
    flex: 3
  },
  submitButtonContainerStyle: {
    flex: 1
  },
  submitButtonStyle: {
    height: 97,
    backgroundColor: colors.COLOR_PRIMARY,
    borderColor: colors.COLOR_PRIMARY
  }
});

export default styles;
