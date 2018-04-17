import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './TransactionsListItemStyles';

const TransactionsListItem = ({
  isOpen,
  data: { transactions, category },
  renderSubItems,
  toggleOpen
}) =>
  <View>
    <TouchableOpacity style={ styles.mainContainer } onPress={ toggleOpen }>
      <View style={ styles.groupContainer }>
        <Icon
          style={ styles.arrow }
          name={ isOpen ? 'ios-arrow-up' : 'ios-arrow-down' } />
        <View style={ styles.textContainer }>
          <Text>{category.name}</Text>
        </View>
        <View style={ styles.rightText }>
          <Badge value={ transactions.length } />
          <Text style={ styles.transactionsSum }>{category.sum}, {category.currency}</Text>
        </View>
      </View>
    </TouchableOpacity>
    { isOpen && renderSubItems() }
  </View>;

export default TransactionsListItem;
