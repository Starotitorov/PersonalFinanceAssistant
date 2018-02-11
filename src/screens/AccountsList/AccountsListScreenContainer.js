import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getAllAccounts,
    isAccountsListDataFetching,
    isAccountsListDataRefreshing
} from './selectors';
import {
    fetchAccountsListData,
    refreshAccountsListData,
    addAccount,
    editAccount
} from './actions';
import { withLoadingIndicator, withScreenFocus } from 'src/components';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => {
    return {
        accounts: getAllAccounts(state),
        isLoading: isAccountsListDataFetching(state),
        refreshing: isAccountsListDataRefreshing(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        onFocus: fetchAccountsListData,
        refreshAccountsListData,
        addAccount,
        editAccount
    }),
    withScreenFocus('AccountsList'),
    withLoadingIndicator
)(AccountsListScreen);
