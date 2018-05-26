import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  getAllAccounts,
  isAccountsListDataFetching
} from './selectors';
import {
  fetchAccountsListData,
  addAccount,
  editAccount,
  resetAccountsListData
} from './actions';
import { withLoadingIndicator } from 'src/components';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => ({
  accounts: getAllAccounts(state),
  isLoading: isAccountsListDataFetching(state),
});

const withAccountsListData = lifecycle({
  componentDidMount() {
    this.props.resetAccountsListData();

    this.props.fetchAccountsListData();
  }
});

export default compose(
  connect(mapStateToProps, {
    fetchAccountsListData,
    addAccount,
    editAccount,
    resetAccountsListData
  }),
  withAccountsListData,
  withLoadingIndicator
)(AccountsListScreen);
