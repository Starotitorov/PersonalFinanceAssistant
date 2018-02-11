import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const addTransfer = transferData => dispatch => {
    const transfer = {
        ...transferData,
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

export const fetchAddTransferDataStart = createAction('ADD_TRANSFER/FETCH_ADD_TRANSFER_DATA_START');
export const fetchAddTransferDataFailure = createAction('ADD_TRANSFER/FETCH_ADD_TRANSFER_DATA_FAILURE');
export const fetchAddTransferDataSuccess = createAction('ADD_TRANSFER/FETCH_ADD_TRANSFER_DATA_SUCCESS');

export const fetchAddTransferData = () => async dispatch => {
    dispatch(fetchAddTransferDataStart());

    return api.fetchAccounts()
        .then(response => response.json())
        .then(({ accounts }) => {
            dispatch(setAccounts(accounts));

            dispatch(fetchAddTransferDataSuccess());
        })
        .catch(e => dispatch(fetchAddTransferDataFailure(e)));
};
