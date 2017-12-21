import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavigationActions } from 'react-navigation';
import { changeDate, refreshTransactions } from 'src/actions/transactions'
import { isApplicationDataFetching } from 'src/selectors/application';
import {
    getViewType,
    isTransactionsRefreshing,
    getFormattedCurrentDate,
    isTransactionsFetching
} from 'src/selectors/transactions';
import { withLoadingIndicator } from 'src/components';
import TransactionsScreen from './TransactionsScreen';
import { setSelectedTransaction } from 'src/actions/transactions';

const mapStateToProps = state => {
    return {
        currentDate: getFormattedCurrentDate(state),
        isLoading: isApplicationDataFetching(state) || isTransactionsFetching(state),
        refreshing: isTransactionsRefreshing(state),
        viewType: getViewType(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeCurrentDateForward() {
            dispatch(changeDate(true));
        },

        onChangeCurrentDateBack() {
            dispatch(changeDate());
        },
        onSelectTransaction(id) {
            dispatch(setSelectedTransaction(id));

            dispatch(NavigationActions.navigate({
                routeName: 'EditTransaction'
            }));
        },

        onAddTransaction() {
            dispatch(NavigationActions.navigate({
                routeName: 'AddTransaction'
            }));
        },

        onRefresh() {
            dispatch(refreshTransactions());
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingIndicator
)(TransactionsScreen);
