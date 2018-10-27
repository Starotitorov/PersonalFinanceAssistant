/*
 * OptionItem.js
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
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from 'src/styles';
import styles from './OptionItemStyles';

const OptionItem = ({
  item: { label, icon } = {},
  color = colors.COLOR_BLACK
}) =>
  <View style={ styles.itemWrapperStyle }>
    {
      icon && <Icon
        iconStyle={ styles.itemIconStyle }
        color={ color }
        name={ icon }
        type="material-community" />
    }
    <Text style={ [styles.itemTextStyle, { color }] }>{ label }</Text>
  </View>;

OptionItem.propTypes = {
  item: PropTypes.shape({}),
  color: PropTypes.string
};

export default OptionItem;
