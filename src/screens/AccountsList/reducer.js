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
import { arrayToObjectById } from 'src/utils'

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
        const { accounts } = action.payload;

        return {
            ...state,
            accounts: arrayToObjectById(accounts)
        };
    }
}, initialState);

export default accountsList;
