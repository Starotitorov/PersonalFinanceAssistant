import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  changeDateForward,
  changeDateBack,
  selectTransaction,
  addTransaction
} from './actions';
import {
  getViewType,
  getFormattedCurrentDate,
  isTransactionsListDataFetching
} from './selectors';
import { fetchTransactionsListData } from './actions';
import TransactionsScreen from './TransactionsScreen';
import { withScreenFocus, withLoadingIndicator } from 'src/components';

const mapStateToProps = state => ({
  isLoading: isTransactionsListDataFetching(state),
  currentDate: getFormattedCurrentDate(state),
  viewType: getViewType(state)
});

export default compose(
  connect(
    mapStateToProps,
    {
      changeDateForward,
      changeDateBack,
      selectTransaction,
      addTransaction,
      onFocus: fetchTransactionsListData
    }
  ),
  withScreenFocus('Transactions'),
  withLoadingIndicator
)(TransactionsScreen);
