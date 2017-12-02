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

export const fetchAccounts = () => (dispatch, getState) => {
    const state = getState();

    dispatch(fetchAccountsStart());

    api.fetchAccounts(state.authorization.token)
        .then(response => response.json())
        .then(({ accounts }) => {
            dispatch(setAccounts(accounts))
        });
};

export const addAccount = accountData => (dispatch, getState) => {
    const { authorization: { token } } = getState();

    return api.addAccount(token, accountData)
        .then(response => response.json())
        .then(() => {
            dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};
