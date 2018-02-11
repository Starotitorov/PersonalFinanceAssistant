import { handleActions } from 'redux-actions';
import {
    setTransaction,
    fetchTransactionStart,
    fetchTransactionFailure
} from './actions';

const initialState = {
    transaction: {},
    fetching: false
};

const addTransaction = handleActions({
    [fetchTransactionStart]: state => {
        return {
            ...state,
            fetching: true
        }
    },
    [fetchTransactionFailure]: state => {
        return {
            ...state,
            fetching: false
        };
    },
    [setTransaction]: (state, { payload: { transaction }}) => {
        return {
            transaction,
            fetching: false
        }
    }
}, initialState);

export default addTransaction;
