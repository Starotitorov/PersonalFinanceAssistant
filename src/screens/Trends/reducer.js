import { handleActions, combineActions } from 'redux-actions';
import {
    fetchTrendsDataStart,
    fetchTrendsDataSuccess,
    fetchTrendsDataFailure,
    setAccounts,
    setCategories,
    setTransactions,
    setSelectedAccount
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
    transactions: {
        byId: {},
        order: [],
    },
    accounts: {
        byId: {},
        order: []
    },
    categories: {
        byId: {},
        order: []
    },
    fetching: false,
    selectedAccount: null
};

const trends = handleActions({
    [fetchTrendsDataStart]: state => {
        return {
            ...state,
            fetching: true
        }
    },
    [combineActions(fetchTrendsDataSuccess, fetchTrendsDataFailure)]: state => {
        return {
            ...state,
            fetching: false
        }
    },
    [setTransactions]: (state, action) => {
        const { transactions } = action.payload;

        return {
            ...state,
            transactions: arrayToObjectById(transactions)
        };
    },
    [setAccounts]: (state, action) => {
        const { accounts } = action.payload;

        return {
            ...state,
            accounts: arrayToObjectById(accounts)
        };
    },
    [setCategories]: (state, action) => {
        const { categories } = action.payload;

        return {
            ...state,
            categories: arrayToObjectById(categories)
        };
    },
    [setSelectedAccount]: (state, { payload: { id }}) => {
        return {
            ...state,
            selectedAccount: id
        }
    }
}, initialState);

export default trends;
