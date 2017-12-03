import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccounts = createAction(
    'ACCOUNTS/SET_ACCOUNTS',
    accounts => ({ accounts })
);

export const fetchAccountsStart = createAction('ACCOUNTS/FETCH_ACCOUNTS_START');

export const selectAccount = createAction(
    'ACCOUNTS/SELECT_ACCOUNT',
    (id) => ({ id })
);

export const fetchAccounts = () => dispatch => {
    dispatch(fetchAccountsStart());

    api.fetchAccounts()
        .then(response => response.json())
        .then(({ accounts }) => {
            dispatch(setAccounts(accounts))
        });
};

export const addAccount = accountData => dispatch => {
    return api.addAccount(accountData)
        .then(response => response.json())
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};

export const updateAccount = accountData => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.updateAccount(selected, accountData)
        .then(response => response.json())
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};

export const removeAccount = accountData => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.removeAccount(selected)
        .then(response => response.json())
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};
