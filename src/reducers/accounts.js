import { handleActions, combineActions } from 'redux-actions';
import {
    fetchAccountsStart,
    setAccounts,
    selectAccount,
    resetAccounts,
    refreshAccountsStart,
    fetchAccountsFailure,
    refreshAccountsFailure
} from 'src/actions/accounts';

const initialState = {
    byId: {},
    order: [],
    selected: null,
    fetching: false,
    refreshing: false
};

const accounts = handleActions({
    [fetchAccountsStart]: (state) => {
        return {
            ...state,
            fetching: true
        }
    },
    [refreshAccountsStart]: state => {
        return {
            ...state,
            refreshing: true
        };
    },
    [combineActions(fetchAccountsFailure, refreshAccountsFailure)](state) {
        return {
            ...state,
            fetching: false,
            refreshing: false
        };
    },
    [setAccounts]: (state, action) => {
        const {accounts} = action.payload;
        let newById = {};
        let newOrder = [];

        accounts.forEach(account => {
            newById[account.id] = account;
            newOrder.push(account.id);
        });

        return {
            byId: newById,
            order: newOrder,
            selected: null,
            fetching: false,
            refreshing: false
        };
    },
    [selectAccount]: (state, action) => {
        return {
            ...state,
            selected: action.payload.id
        };
    },
    [resetAccounts]: () => initialState
}, initialState);

export default accounts;
