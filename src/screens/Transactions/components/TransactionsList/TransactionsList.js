import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView, RefreshControl } from 'react-native';
import { colors } from 'src/styles';
import styles from './TransactionsListStyles';

const keyExtractor = ({ id }) => id;

const TransactionsList = ({ onRefresh, refreshing, data, EmptyListComponent, renderItem }) =>
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={ refreshing }
        colors={ [colors.COLOR_PRIMARY] }
        onRefresh={ onRefresh } />
    }
    contentContainerStyle={ styles.container }>
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
