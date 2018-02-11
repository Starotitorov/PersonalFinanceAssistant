import { handleActions, combineActions } from 'redux-actions';
import {
    setAccounts,
    fetchAccountsListDataStart,
    fetchAccountListDataSuccess,
    fetchAccountsListDataFailure,
    refreshAccountsListDataStart,
    refreshAccountListDataSuccess,
    refreshAccountsListDataFailure
} from './actions';

const initialState = {
    accounts: {
        byId: {},
        order: []
    },
    fetching: false,
    refreshing: false
};

const accountsList = handleActions({
    [fetchAccountsListDataStart]: (state) => {
        return {
            ...state,
            fetching: true
        }
    },
    [refreshAccountsListDataStart]: state => {
        return {
            ...state,
            refreshing: true
        };
    },
    [combineActions(
        fetchAccountsListDataFailure,
        refreshAccountsListDataFailure,
        fetchAccountListDataSuccess,
        refreshAccountListDataSuccess
    )](state) {
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
            ...state,
            accounts: {
                byId: newById,
                order: newOrder
            }
        };
    }
}, initialState);

export default accountsList;
