import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { LIST, CHART } from 'src/constants/transactionsViewTypes';

export const changePeriodView = createAction(
    'TRANSACTIONS/CHANGE_PERIOD_VIEW',
    periodType => ({ periodType })
);

export const changeDate = isChangeForward => (dispatch, getState) => {
    const { transactions: { currentDate, periodType } } = getState();
    let periodModificator = periodType;

    const timeModificator = isChangeForward ? 1 : -1;
    const newDate = currentDate.clone().add(timeModificator, periodModificator);

    dispatch(changeCurrentDate(newDate));
};

export const changeCurrentDate = createAction(
    'TRANSACTIONS/CHANGE_CURRENT_DATE',
    currentDate => ({ currentDate })
);

export const setTransactions = createAction(
    'TRANSACTIONS/SET_TRANSACTIONS',
    transactions => ({ transactions })
);

export const fetchTransactionsStart = createAction('TRANSACTIONS/FETCH_TRANSACTIONS_START');
export const fetchTransactionsFailure = createAction('TRANSACTIONS/FETCH_TRANSACTIONS_FAILURE');

export const refreshTransactionsStart = createAction('TRANSACTIONS/REFRESH_TRANSACTIONS_START');
export const refreshTransactionsFailure = createAction('TRANSACTIONS/REFRESH_TRANSACTIONS_FAILURE');

const fetchTransactionsRequest = () => dispatch => {
    return api.fetchTransactions()
        .then(response => response.json())
        .then(({ transactions }) => transactions.map(t => ({
            ...t,
            categoryId: t.category.id
        })))
        .then(transactions => dispatch(setTransactions(transactions)));
};

export const refreshTransactions = () => async dispatch => {
    dispatch(refreshTransactionsStart());

    try {
        await dispatch(fetchTransactionsRequest())
    } catch(e) {
        dispatch(refreshTransactionsFailure(e));
    }
};

export const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransactionsStart());

    try {
        await dispatch(fetchTransactionsRequest());
    } catch(e) {
        dispatch(fetchTransactionsFailure(e));
    }
};

export const resetTransactions = createAction('TRANSACTIONS/RESET_TRANSACTIONS');

export const addTransaction = transactionData => dispatch => {
    return api.addTransaction(transactionData)
        .then(() => {
            dispatch(fetchTransactions());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};
export const updateTransaction = transactionData => (dispatch, getState) => {
    const { transactions: { selected } } = getState();

    return api.updateTransaction(selected, transactionData)
        .then(() => {
            dispatch(fetchTransactions());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};
export const removeTransaction = () => (dispatch, getState) => {
    const { transactions: { selected } } = getState();

    return api.removeTransaction(selected)
        .then(() => {
            dispatch(fetchTransactions());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};

export const setSelectedTransaction = createAction(
    'TRANSACTIONS/SET_SELECTED_TRANSACTION',
    id => ({ id })
);

export const setSelectedAccount = createAction(
    'TRANSACTIONS/SET_SELECTED_ACCOUNT',
    accountId => ({ accountId })
);

export const setViewType = createAction(
    'TRANSACTIONS/SET_VIEW_TYPE',
    viewType => ({ viewType })
);

export const switchViewType = () => (dispatch, getState) => {
    const { transactions: { viewType } } = getState();

    dispatch(setViewType(viewType === LIST ? CHART : LIST));
};
