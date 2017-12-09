import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccounts = createAction(
    'ACCOUNTS/SET_ACCOUNTS',
    accounts => ({ accounts })
);

export const resetAccounts = createAction('ACCOUNTS/RESET_ACCOUNTS');

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
    const data = {
        ...accountData,
        balance: Number(accountData.balance)
    };

    return api.addAccount(data)
        .then(async () => {
            await dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        })
};

export const updateAccount = accountData => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.updateAccount(selected, accountData)
        .then(async () => {
            await dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};

export const removeAccount = () => (dispatch, getState) => {
    const { accounts: { selected } } = getState();

    return api.removeAccount(selected)
        .then(async () => {
            await dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};
