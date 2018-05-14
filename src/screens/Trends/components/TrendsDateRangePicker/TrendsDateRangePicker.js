import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { DatePickerField } from 'src/components';
import styles from './TrendsDateRangePickerStyles';
import { formatDate } from 'src/utils';
import { colors } from 'src/styles';

const TrendsDateRangePicker = ({ dateRange: { from, to }, setFromDate, setToDate, fetchTrendsData, handleGet }) =>
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
      backgroundColor={ colors.COLOR_SECONDARY }
      containerViewStyle={ styles.button }
      buttonStyle={ styles.buttonInner }
      title="Fetch"
      onPress={ handleGet }/>
  </View>;

export default TrendsDateRangePicker;
