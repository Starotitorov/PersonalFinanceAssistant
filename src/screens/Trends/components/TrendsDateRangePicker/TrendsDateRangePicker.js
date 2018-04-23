import React from 'react';
import { View, Text } from 'react-native';
import { DatePickerField } from 'src/components';
import styles from './TrendsDateRangePickerStyles';
import { formatDate } from 'src/utils';

const TrendsDateRangePicker = ({ dateRange: { from, to }, setFromDate, setToDate }) =>
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
  </View>;

export default TrendsDateRangePicker;
