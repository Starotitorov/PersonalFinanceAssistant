import { handleActions } from 'redux-actions';
import {
    setAccounts,
    setCategories
} from './actions';

const initialState = {
    accounts: [],
    categories: []
};

const addTransaction = handleActions({
    [setAccounts]: (state, { payload: { accounts } }) => {
        return {
            ...state,
            accounts
        };
    },
    [setCategories]: (state, { payload: { categories }}) => {
        return {
            ...state,
            categories
        };
    }
}, initialState);

export default addTransaction;
