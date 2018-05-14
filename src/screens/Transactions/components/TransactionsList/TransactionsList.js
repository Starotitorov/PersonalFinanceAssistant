import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView } from 'react-native';
import styles from './TransactionsListStyles';

const keyExtractor = ({ id }) => id;

const TransactionsList = ({ data, EmptyListComponent, renderItem }) =>
  <ScrollView contentContainerStyle={ styles.container }>
    <FlatList
      data={ data }
      keyExtractor={ keyExtractor }
      renderItem={ renderItem }
      ListEmptyComponent={ EmptyListComponent } />
  </ScrollView>;

TransactionsList.propTypes = {
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  EmptyListComponent: PropTypes.shape({}),
  renderItem: PropTypes.func
};

export default TransactionsList;
