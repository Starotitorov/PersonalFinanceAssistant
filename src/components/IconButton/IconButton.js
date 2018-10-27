/*
 * IconButton.js
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
import { View, ViewPropTypes, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NativeTouchable from '../NativeTouchable';
import styles from './IconButtonStyles';

export default function IconButton({ color, iconStyle, name, size, style, disabled, onPress, ...rest }) {
  return (
    <NativeTouchable { ...rest } onPress={ disabled ? () => {} : onPress }>
      <View style={ [styles.container, style] }>
        <Icon
          color={ color }
          name={ name }
          size={ size }
          style={ iconStyle } />
      </View>
    </NativeTouchable>
  );
}

IconButton.propTypes = {
  color: PropTypes.string,
  iconStyle: Text.propTypes.style,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.array
  ])
};
