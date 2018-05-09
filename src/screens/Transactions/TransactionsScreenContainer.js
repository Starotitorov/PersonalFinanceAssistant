import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  changeDateForward,
  changeDateBack,
  refreshTransactionsListData,
  fetchTransactionsListData,
  selectTransaction,
  addTransaction
} from './actions';
import {
  getViewType,
  isTransactionsListDataRefreshing,
  getFormattedCurrentDate,
  isTransactionsListDataFetching
} from './selectors';
import { withLoadingIndicator } from 'src/components';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => ({
  currentDate: getFormattedCurrentDate(state),
  isLoading: isTransactionsListDataFetching(state),
  refreshing: isTransactionsListDataRefreshing(state),
  viewType: getViewType(state)
});

const withTransactionsListData = lifecycle({
  componentDidMount() {
    this.props.fetchTransactionsListData();
  }
});

export default compose(
  connect(mapStateToProps, {
    changeDateForward,
    changeDateBack,
    refreshTransactionsListData,
    fetchTransactionsListData,
    selectTransaction,
    addTransaction
  }),
  withTransactionsListData,
  withLoadingIndicator
)(TransactionsScreen);
