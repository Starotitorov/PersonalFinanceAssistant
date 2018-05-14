import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  getAllAccounts,
  isAccountsListDataFetching
} from './selectors';
import {
  fetchAccountsListData,
  addAccount,
  editAccount
} from './actions';
import { withLoadingIndicator } from 'src/components';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => ({
  accounts: getAllAccounts(state),
  isLoading: isAccountsListDataFetching(state),
});

const withAccountsListData = lifecycle({
  componentDidMount() {
    this.props.fetchAccountsListData();
  }
});

export default compose(
  connect(mapStateToProps, {
    fetchAccountsListData,
    addAccount,
    editAccount
  }),
  withAccountsListData,
  withLoadingIndicator
)(AccountsListScreen);
