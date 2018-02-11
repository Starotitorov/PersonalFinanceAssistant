import { handleActions, combineActions } from 'redux-actions';
import {
    setAccounts,
    fetchAddTransferDataStart,
    fetchAddTransferDataFailure,
    fetchAddTransferDataSuccess
} from './actions';

const initialState = {
    accounts: [],
    fetching: false
};

const addTransfer = handleActions({
    [fetchAddTransferDataStart]: state => {
        return {
            ...state,
            fetching: true
        };
    },
    [combineActions(fetchAddTransferDataFailure, fetchAddTransferDataSuccess)](state) {
        return {
            ...state,
            fetching: false
        }
    },
    [setAccounts]: (state, action) => {
        const { accounts } = action.payload;

        return {
            ...state,
            accounts
        };
    }
}, initialState);

export default addTransfer;
