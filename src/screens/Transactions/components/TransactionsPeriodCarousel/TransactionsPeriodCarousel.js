/*
 * TransactionsPeriodCarousel.js
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
import { View, Text } from 'react-native';
import { colors } from 'src/styles';
import { IconButton } from 'src/components';
import styles from './TransactionsPeriodCarouselStyles';

export default function TransactionsPeriodCarousel({
  currentDate,
  onPressBack,
  onPressForward,
  disabled
}) {
  return (
    <View style={ styles.container }>
      <IconButton
        iconStyle={ [styles.button, disabled && { color: colors.LIGHT_GRAY }] }
        disabled={ disabled }
        name="ios-arrow-back"
        onPress={ onPressBack } />
      <View style={ styles.periodContainer }>
        <Text style={ [styles.currentDate, { color: disabled ? colors.LIGHT_GRAY : colors.COLOR_WHITE }] }>
          {currentDate}
        </Text>
      </View>
      <IconButton
        iconStyle={ [styles.button, disabled && { color: colors.LIGHT_GRAY }] }
        disabled={ disabled }
        name="ios-arrow-forward"
        onPress={ onPressForward } />
    </View>
  );
}
