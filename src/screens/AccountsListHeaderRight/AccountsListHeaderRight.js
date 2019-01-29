/*
 * AccountsListHeaderRight.js
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
import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { handleAddTransfer } from './actions';
import { colors } from 'src/styles';
import styles from './AccountsListHeaderRightStyles';

const AccountsListHeaderRight = ({ addTransfer }) =>
  <TouchableOpacity onPress={ addTransfer }>
    <Icon
      style={ styles.icon }
      color={ colors.COLOR_WHITE }
      name="compare-arrows" />
  </TouchableOpacity>;

export default compose(
  connect(null, { handleAddTransfer }),
  withHandlers({
    addTransfer: ({ handleAddTransfer, navigation }) => () => {
      handleAddTransfer({ navigation });
    }
  })
)(AccountsListHeaderRight);
