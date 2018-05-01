import { connect } from 'react-redux';
import {
  changeDateForward,
  changeDateBack,
  selectTransaction,
  addTransaction
} from './actions';
import {
  getViewType,
  getFormattedCurrentDate,
} from './selectors';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => ({
  currentDate: getFormattedCurrentDate(state),
  viewType: getViewType(state)
});

export default connect(
  mapStateToProps,
  {
    changeDateForward,
    changeDateBack,
    selectTransaction,
    addTransaction
  }
)(TransactionsScreen);
