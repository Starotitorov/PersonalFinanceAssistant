import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  changeDateForward,
  changeDateBack,
  fetchTransactionsListData,
  selectTransaction,
  addTransaction
} from './actions';
import {
  getViewType,
  getFormattedCurrentDate
} from './selectors';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => ({
  currentDate: getFormattedCurrentDate(state),
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
    fetchTransactionsListData,
    selectTransaction,
    addTransaction
  }),
  withTransactionsListData
)(TransactionsScreen);
