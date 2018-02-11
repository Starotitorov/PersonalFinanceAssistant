import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccount = createAction(
    'EDIT_ACCOUNT/SET_ACCOUNT',
    account => ({ account })
);

export const fetchAccountStart = createAction('EDIT_ACCOUNT/FETCH_ACCOUNT_START');
export const fetchAccountFailure = createAction('EDIT_ACCOUNT/FETCH_ACCOUNT_FAILURE');

export const fetchAccount = id => dispatch => {
    dispatch(fetchAccountStart());

    return api.getAccount(id)
        .then(response => response.json())
        .then(({ account }) => dispatch(setAccount(account)))
        .catch(e => dispatch(fetchAccountFailure(e)));
};

export const updateAccount = accountData => (dispatch, getState) => {
    const { editAccount: { account: { id }}} = getState();

    return api.updateAccount(id, accountData)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        });
};
