import { connect } from 'react-redux';
import { getAllAccounts } from 'src/selectors/accounts';
import { fetchAccounts, selectAccount } from 'src/actions/accounts';
import { NavigationActions } from 'react-navigation';
import AccountsListScreen from './AccountsListScreen';
import AccountsListScreenView from './AccountsListScreenView';

const mapStateToProps = state => {
    return {
        accounts: getAllAccounts(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectAccount(id) {
            dispatch(selectAccount(id));

            dispatch(NavigationActions.navigate({ routeName: 'AccountView' }));
        },

        onAddAccount() {
            dispatch(NavigationActions.navigate({routeName: 'AddAccount'}));
        },

        onFetch() {
            dispatch(fetchAccounts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsListScreenView(AccountsListScreen));
