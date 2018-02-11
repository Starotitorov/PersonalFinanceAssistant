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
import { withLoadingIndicator, withFetchScreenDataOnFocus } from 'src/components';
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
        fetchScreenData: fetchAccountsListData,
        refreshAccountsListData,
        addAccount,
        editAccount
    }),
    withFetchScreenDataOnFocus('AccountsList'),
    withLoadingIndicator
)(AccountsListScreen);
