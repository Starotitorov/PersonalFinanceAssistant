import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAllAccounts, isAccountsRefreshing, isAccountsFetching} from 'src/selectors/accounts';
import { isApplicationDataFetching } from 'src/selectors/application';
import { selectAccount, refreshAccounts } from 'src/actions/accounts';
import { withLoadingIndicator } from 'src/components';
import { NavigationActions } from 'react-navigation';
import AccountsListScreen from './AccountsListScreen';

const mapStateToProps = state => {
    return {
        accounts: getAllAccounts(state),
        isLoading: isApplicationDataFetching(state) || isAccountsFetching(state),
        refreshing: isAccountsRefreshing(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectAccount(id) {
            dispatch(selectAccount(id));

            dispatch(NavigationActions.navigate({ routeName: 'EditAccount' }));
        },

        onAddAccount() {
            dispatch(NavigationActions.navigate({routeName: 'AddAccount'}));
        },

        onRefresh() {
            dispatch(refreshAccounts());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingIndicator
)(AccountsListScreen);
