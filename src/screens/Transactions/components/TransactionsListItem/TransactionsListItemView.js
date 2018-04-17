import React from 'react';
import { withHandlers, compose } from 'recompose';
import { withToggle } from 'src/components';
import TransactionsListSubItem from '../TransactionsListSubItem';
import TransactionsListItem from './TransactionsListItem';

const withRenderSubItem = withHandlers({
  renderSubItems: ({ data: { transactions }, onSelectTransaction }) => () =>
    transactions.map(item =>
      <TransactionsListSubItem
        item={ item }
        onSelectTransaction={ onSelectTransaction } />)
});

export default compose(
  withRenderSubItem,
  withToggle
)(TransactionsListItem);
