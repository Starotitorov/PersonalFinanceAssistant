import { handleActions } from 'redux-actions';
import {
    setAccount,
    fetchAccountStart,
    fetchAccountFailure
} from './actions'

const initialState = {
    account: {},
    fetching: false
};

const editAccount = handleActions({
    [setAccount]: (state, { payload: { account }}) => {
        return {
            account,
            fetching: false
        }
    },
    [fetchAccountStart]: state => {
        return {
            ...state,
            fetching: true
        }
    },
    [fetchAccountFailure]: state => {
        return {
            ...state,
            fetching: false
        }
    }
}, initialState);

export default editAccount;
