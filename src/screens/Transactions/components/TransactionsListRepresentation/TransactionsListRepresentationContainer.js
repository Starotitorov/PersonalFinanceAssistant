import { connect } from 'react-redux';
import { isTransactionsFetching, isTransactionsListDataFetching } from '../../selectors';
import TransactionsListRepresentationView from './TransactionsListRepresentationView';

export default connect(
  state => ({
    isLoading: isTransactionsFetching(state) || isTransactionsListDataFetching(state)
  })
)(TransactionsListRepresentationView);
