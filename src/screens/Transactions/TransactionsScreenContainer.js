import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    changeDateForward,
    changeDateBack,
    refreshTransactionsListData,
    fetchTransactionsListData,
    selectTransaction,
    addTransaction
} from './actions';
import {
    getViewType,
    isTransactionsListDataRefreshing,
    getFormattedCurrentDate,
    isTransactionsListDataFetching
} from './selectors';
import { withLoadingIndicator, withScreenFocus } from 'src/components';
import TransactionsScreen from './TransactionsScreen';

const mapStateToProps = state => {
    return {
        currentDate: getFormattedCurrentDate(state),
        isLoading: isTransactionsListDataFetching(state),
        refreshing: isTransactionsListDataRefreshing(state),
        viewType: getViewType(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        changeDateForward,
        changeDateBack,
        refreshTransactionsListData,
        onFocus: fetchTransactionsListData,
        selectTransaction,
        addTransaction
    }),
    withScreenFocus('Transactions'),
    withLoadingIndicator
)(TransactionsScreen);
