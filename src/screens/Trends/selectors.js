import { chain, sumBy, findIndex, times, constant } from 'lodash';
import moment from 'moment';
import * as categoryTypes from 'src/constants/categoryTypes';
import filterTransactionsByAccount from 'src/helpers/filterTransactionsByAccount';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';

const INTERVALS_COUNT = 5;

const getTimeIntervals = (count) => {
    const currentDate = Date.now();
    let leftBorder = moment(currentDate).startOf('month');
    let rightBorder = moment(currentDate).endOf('month');

    const intervals = [];
    for (let i = 0; i < count; ++i) {
        intervals.push([leftBorder, rightBorder]);

        rightBorder = moment(leftBorder);
        leftBorder = moment(leftBorder).subtract(1, 'month');
    }

    return intervals.reverse();
};

const getTransactionsStatisticsByIntervals = (transactions, intervals) => {
    return chain(transactions)
        .groupBy(({ date }) => {
            return findIndex(intervals, i => date >= i[0] && date < i[1])
        })
        .transform((acc, transactions, key) => {
            if (key == -1) {
                return;
            }

            const totalSum = Math.abs(sumBy(transactions, 'value'));

            acc[key] = totalSum;
        }, times(intervals.length, constant(0)))
        .value();
};

export const getTrendsData = ({
    trends: {
        transactions: {
            byId
        },
        categories: {
            byId: categoriesById
        },
        selectedAccount
    }
}) => {
    let transactionList = getTransactionsList(byId, categoriesById);
    transactionList = filterTransactionsByAccount(transactionList, selectedAccount);

    const incomeTransactions = filterTransactionsByCategoryType(
        transactionList,
        categoryTypes.INCOME_CATEGORY
    );
    const outcomeTransactions = filterTransactionsByCategoryType(
        transactionList,
        categoryTypes.OUTCOME_CATEGORY
    );

    const intervals = getTimeIntervals(INTERVALS_COUNT);

    const incomeTransactionsStatistics = getTransactionsStatisticsByIntervals(
        incomeTransactions,
        intervals
    );
    const outcomeTransactionsStatistics = getTransactionsStatisticsByIntervals(
        outcomeTransactions,
        intervals
    );

    return {
        income: incomeTransactionsStatistics,
        outcome: outcomeTransactionsStatistics
    };
};

export const isTrendsDataFetching = ({
    trends: {
        fetching
    }
}) => fetching;

export const getAllAccounts = ({
    trends: {
        accounts: {
            byId,
            order
        }
    }
}) => order.map(id => byId[id]);

export const getSelectedAccountId = ({ trends: { selectedAccount }}) => selectedAccount;
