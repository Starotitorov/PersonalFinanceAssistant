import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const addTransfer = transferData => dispatch => {
    const transfer = {
        ...transferData,
        exchangeRate: Number(transferData.exchangeRate),
        value: Number(transferData.value)
    };

    return api.addTransfer(transfer)
        .then(async () => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        });
};

export const setAccounts = createAction(
    'ADD_TRANSFER/SET_ACCOUNTS',
    accounts => ({ accounts })
);
