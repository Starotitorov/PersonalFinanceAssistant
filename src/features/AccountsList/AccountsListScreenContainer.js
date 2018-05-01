import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withLoadingIndicator, withScreenFocus } from 'src/components';
import {
  addAccount,
  editAccount,
  fetchAccountsListData
} from './actions';
import { getAllAccounts, isAccountsListDataFetching } from './selectors';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => ({
  isLoading: isAccountsListDataFetching(state),
  accounts: getAllAccounts(state)
});

export default compose(
  connect(
    mapStateToProps,
    {
      addAccount,
      editAccount,
      onFocus: fetchAccountsListData
    }
  ),
  withScreenFocus('Accounts'),
  withLoadingIndicator
)(AccountsListScreen);
