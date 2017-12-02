import { handleActions } from 'redux-actions';
import { fetchAccountsStart, setAccounts, selectAccount } from 'src/actions/accounts';

const initialState = {
    byId: {},
    order: [],
    selected: null,
    fetching: false
};

const accounts = handleActions({
    [fetchAccountsStart]: (state) => {
        return {
            ...state,
            fetching: true
        }
    },
    [setAccounts]: (state, action) => {
        const { accounts } = action.payload;
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
            fetching: false
        };
    },
    [selectAccount]: (state, action) => {
        return {
            ...state,
            selected: action.payload.id
        };
    }
}, initialState);

export default accounts;
