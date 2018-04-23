import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { momentFormat } from 'src/utils';
import styles from './TransactionsListSubItemStyles';

const formatDate = momentFormat.formatTransactionDate;

const TransactionsListSubItem = ({ item: { date, value, currency, id, note }, handleSelectTransaction }) =>
  <TouchableOpacity onPress={ handleSelectTransaction }>
    <View style={ styles.subItemContainer }>
      <View style={ styles.subItemMain }>
        <View style={ styles.subItemDateContainer }>
          <Text>{ formatDate(date) }</Text>
        </View>
        <Text>{ value.toFixed(2) } { currency }</Text>
      </View>
      { note && <Text style={ styles.subItemNote }>{ note }</Text> }
    </View>
  </TouchableOpacity>;

export default TransactionsListSubItem;
