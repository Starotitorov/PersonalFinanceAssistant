import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const setAccounts = createAction(
    'ACCOUNTS_LIST/SET_ACCOUNTS',
    accounts => ({ accounts })
);

export const fetchAccountsListDataStart = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_START');
export const fetchAccountsListDataFailure = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_FAILURE');
export const fetchAccountListDataSuccess = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_SUCCESS');

export const refreshAccountsListDataStart = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_START');
export const refreshAccountsListDataFailure = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_FAILURE');
export const refreshAccountListDataSuccess = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_SUCCESS');

const fetchAccountsListDataRequest = () => dispatch => {
    return api.fetchAccounts()
        .then(response => response.json())
        .then(({ accounts }) => {
            dispatch(setAccounts(accounts))
        });
};

export const fetchAccountsListData = () => async dispatch => {
    dispatch(fetchAccountsListDataStart());

    try {
        await dispatch(fetchAccountsListDataRequest());

        dispatch(fetchAccountListDataSuccess())
    } catch(e) {
        dispatch(fetchAccountsListDataFailure(e));
    }
};

export const refreshAccountsListData = () => async dispatch => {
    dispatch(refreshAccountsListDataStart());

    try {
        await dispatch(fetchAccountsListDataRequest());

        dispatch(refreshAccountListDataSuccess());
    } catch(e) {
        dispatch(refreshAccountsListDataFailure(e));
    }
};

export const addAccount = id => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'AddAccount' }));
};

export const editAccount = id => dispatch => {
    dispatch(NavigationActions.navigate({
        routeName: 'EditAccount',
        params: {
            id
        }
    }));
};
