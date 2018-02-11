import { createAction } from 'redux-actions'
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setAccounts = createAction(
    'ADD_TRANSACTION/SET_ACCOUNTS',
    accounts => ({ accounts })
);

export const setCategories = createAction(
    'ADD_TRANSACTION/SET_CATEGORIES',
    categories => ({ categories })
);

export const setAddTransactionData = ({ accounts, categories }) => dispatch => {
    dispatch(setCategories(categories));

    dispatch(setAccounts(accounts));
};

export const addTransaction = transactionData => dispatch => {
    return api.addTransaction(transactionData)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};
