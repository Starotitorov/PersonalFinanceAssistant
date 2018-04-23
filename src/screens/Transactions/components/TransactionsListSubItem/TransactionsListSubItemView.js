import { withHandlers } from 'recompose';
import TransactionsListSubItem from './TransactionsListSubItem';

const withHandleSelectTransaction = withHandlers({
  handleSelectTransaction: ({ onSelectTransaction, item: { id }}) => () => onSelectTransaction(id)
});

export default withHandleSelectTransaction(TransactionsListSubItem);
