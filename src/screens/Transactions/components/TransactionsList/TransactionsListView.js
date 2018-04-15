import React from 'react';
import { withHandlers } from 'recompose';
import { withEmptyListComponent } from 'src/components';
import TransactionsListItem from '../TransactionsListItem';
import TransactionsList from './TransactionsList';

const withRenderListItem = withHandlers({
  renderItem: ({ onSelectTransaction }) => ({ item }) =>
    <TransactionsListItem data={ item } onSelectTransaction={ onSelectTransaction } />
});

export default withRenderListItem(withEmptyListComponent(TransactionsList, 'No transactions'));
