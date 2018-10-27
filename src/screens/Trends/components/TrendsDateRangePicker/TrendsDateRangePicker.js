/*
 * TrendsDateRangePicker.js
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
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { DatePickerField } from 'src/components';
import styles from './TrendsDateRangePickerStyles';
import { formatDate } from 'src/utils';
import { colors } from 'src/styles';

const TrendsDateRangePicker = ({
  dateRange: { from, to },
  setFromDate,
  setToDate,
  fetchTrendsData,
  handleGet,
  isTrendsDataFetching
}) =>
  <View>
    <Text style={ styles.title }>Enter date range</Text>
    <View style={ styles.pickersContainer }>
      <DatePickerField
        style={ styles.pickerStyle }
        label="From date"
        placeholder="From date"
        input={{
          value: formatDate(from),
          onChange: setFromDate
        }} />
      <DatePickerField
        style={ styles.pickerStyle }
        label="To date"
        placeholder="To date"
        input={{
          value: formatDate(to),
          onChange: setToDate
        }} />
    </View>
    <Button
      disabled={ isTrendsDataFetching }
      backgroundColor={ colors.COLOR_SECONDARY }
      containerViewStyle={ styles.button }
      buttonStyle={ styles.buttonInner }
      title="Fetch"
      onPress={ handleGet } />
  </View>;

export default TrendsDateRangePicker;
