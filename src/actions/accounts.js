import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccounts = createAction(
    'ACCOUNTS/SET_ACCOUNTS',
    accounts => ({ accounts })
);

export const resetAccounts = createAction('ACCOUNTS/RESET_ACCOUNTS');

export const fetchAccountsStart = createAction('ACCOUNTS/FETCH_ACCOUNTS_START');
export const fetchAccountsFailure = createAction('ACCOUNTS/FETCH_ACCOUNTS_FAILURE');

export const refreshAccountsStart = createAction('ACCOUNTS/REFRESH_ACCOUNTS_START');
export const refreshAccountsFailure = createAction('ACCOUNTS/REFRESH_ACCOUNTS_FAILURE');

export const selectAccount = createAction(
    'ACCOUNTS/SELECT_ACCOUNT',
    (id) => ({ id })
);

const fetchAccountsRequest = () => dispatch => {
    return api.fetchAccounts()
        .then(response => response.json())
        .then(({ accounts }) => {
            dispatch(setAccounts(accounts))
        });
};

export const fetchAccounts = () => async dispatch => {
    dispatch(fetchAccountsStart());

    try {
        await dispatch(fetchAccountsRequest());
    } catch(e) {
        dispatch(fetchAccountsFailure(e));
    }
};

export const refreshAccounts = () => async dispatch => {
    dispatch(refreshAccountsStart());

    try {
        await dispatch(fetchAccountsRequest());
    } catch(e) {
        dispatch(fetchAccountsFailure(e));
    }
};

export const addAccount = accountData => dispatch => {
    const data = {
        ...accountData,
        balance: Number(accountData.balance)
    };

    return api.addAccount(data)
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        })
};

export const updateAccount = accountData => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.updateAccount(selected, accountData)
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        });
};

export const removeAccount = () => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.removeAccount(selected)
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        });
};
