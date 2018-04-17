import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
        <MaterialCommunityIcon
          style={ styles.categoryIcon }
          name={ category.icon ? category.icon : undefined } />
        <View style={ styles.textContainer }>
          <Text style={ styles.categoryName }>{category.name}</Text>
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
