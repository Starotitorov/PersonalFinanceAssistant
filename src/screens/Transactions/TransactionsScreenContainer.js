import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavigationActions } from 'react-navigation';
import { changeDate } from 'src/actions/transactions'
import { getFormattedCurrentDate } from 'src/selectors/transactions';
import { isApplicationDataFetching } from 'src/selectors/application';
import { getTransactionsGroupedByCategories, isTransactionsFetching } from 'src/selectors/transactions';
import { withLoadingIndicator } from 'src/components';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => {
    return {
        currentDate: getFormattedCurrentDate(state),
        isLoading: isApplicationDataFetching(state),
        fetching: isTransactionsFetching(state),
        data: getTransactionsGroupedByCategories(state)
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

        onAddTransaction() {
            dispatch(NavigationActions.navigate({
                routeName: 'AddTransaction'
            }));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingIndicator
)(TransactionsScreen);