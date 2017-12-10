import moment from 'moment';
import { handleActions } from 'redux-actions';
import {
    changeCurrentDate,
    changePeriodView,
    fetchTransactionsStart,
    setTransactions,
    resetTransactions
} from 'src/actions/transactions';
import periodTypes from 'src/constants/transactionPeriodTypes';

const initialState = {
    currentDate: moment(),
    periodType: periodTypes.WEEK.value,
    byId: {},
    order: [],
    fetching: false
};

const transactions = handleActions({
    [changeCurrentDate]: (state, action) => {
        return {
            ...state,
            currentDate: action.payload.currentDate
        }
    },
    [changePeriodView]: (state, action) => {
        return {
            ...state,
            periodType: action.payload.periodType
        }
    },
    [fetchTransactionsStart]: (state) => ({
        ...state,
        fetching: true
    }),
    [setTransactions]: (state, action) => {
        const { transactions } = action.payload;
        let newById = {};
        let newOrder = [];

        transactions.forEach(transaction => {
            newById[transaction.id] = transaction;
            newOrder.push(transaction.id);
        });

        return {
            ...state,
            byId: newById,
            order: newOrder,
            fetching: false
        };
    },
    [resetTransactions]: () => initialState
}, initialState);

export default transactions;
