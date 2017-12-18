import { chain, values, find, sumBy, findIndex } from 'lodash';
import moment from 'moment';
import * as categoryTypes from 'src/constants/categoryTypes';
import periodTypes from 'src/constants/transactionPeriodTypes';

export const getCurrentPeriodType = state => state.transactions.periodType;

export const getFormattedCurrentDate = state => {
    const { currentDate, periodType } = state.transactions;

    if (periodType === periodTypes.YEAR.value) {
        return currentDate.format('YYYY');
    } else if (periodType === periodTypes.MONTH.value) {
        return currentDate.format('MMMM YYYY');
    } else if (periodType === periodTypes.WEEK.value) {
        const weekStart = currentDate.startOf('week').format('M.D');
        const weekEnd = currentDate.endOf('week').format('M.D');

        return currentDate.format(`[${weekStart} - ${weekEnd}] YYYY`);
    } else if (periodType === periodTypes.DAY.value) {
        return currentDate.format('MMM Do YYYY')
    }
};

const filterTransactionsByAccount = (transactions, selected) =>
    transactions.filter(({ accountId }) => accountId === selected);

const filterTransactionsByTimeRange = (
    {
        transactions,
        currentDate,
        periodType
    }
) => {
    const delta = find(values(periodTypes), { value: periodType }).single;
    const lowerBound = moment(currentDate).startOf(delta);
    const higherBound = moment(currentDate).endOf(delta);

    return transactions
        .filter(({ date }) => date >= lowerBound && date <= higherBound);
};

const getTransactionsList = (transactionsById, categoriesById) => {
    return chain(values(transactionsById))
        .map(transaction => {
            const category = categoriesById[transaction.categoryId];

            if (!category) {
                return null;
            }

            const { categoryTypeId } = category;

            return {
                ...transaction,
                date: moment(transaction.date),
                categoryTypeId,
                value: (categoryTypeId === categoryTypes.INCOME_CATEGORY
                    ? 1 : -1) * transaction.value
            }
        })
        .compact()
        .value();
};

const filterTransactionsByCategoryType = (transactions, categoryType) => {
    return transactions
        .filter(transaction => transaction.categoryTypeId === categoryType);
};

export const getTransactionsGroupedByCategories = (
    {
        transactions: {
            selectedAccount,
            byId,
            currentDate,
            periodType
        },
        categories: {
            byId: categoriesById
        }
    }
) => {
    const transactionsList = getTransactionsList(byId, categoriesById);
    const filteredByAccount = filterTransactionsByAccount(transactionsList, selectedAccount);
    const transactions = filterTransactionsByTimeRange({
        transactions: filteredByAccount,
        currentDate,
        periodType
    });

    const grouped = chain(transactions)
        .groupBy('categoryId')
        .transform((acc, transactions, key) => {
            const { name, icon } = categoriesById[key] || {};
            const sum = transactions.reduce((sum, { value }) => sum + value, 0);

            acc.push({
                category: {
                    name,
                    icon,
                    sum
                },
                transactions
            });
        }, [])
        .value();

    return grouped;
};

export const getAllTransactions = ({ transactions: { byId, order }}) =>
    order.map(id => byId[id]);

export const isTransactionsFetching = state => state.transactions.fetching;

export const getSelectedAccountId = state => state.transactions.selectedAccount;

export const getTransactionsChartData = (
    {
        transactions: {
            selectedAccount,
            byId,
            currentDate,
            periodType
        },
        categories: {
            byId: categoriesById
        }
    }
) => {
    const transactionsList = getTransactionsList(byId, categoriesById);
    const filteredByAccount = filterTransactionsByAccount(transactionsList, selectedAccount);
    const transactions = filterTransactionsByTimeRange({
        transactions: filteredByAccount,
        currentDate,
        periodType
    });

    const incomeTransactions = filterTransactionsByCategoryType(transactions, categoryTypes.INCOME_CATEGORY);
    const outcomeTransactions = filterTransactionsByCategoryType(transactions, categoryTypes.OUTCOME_CATEGORY);

    const totalIncomeSum = sumBy(incomeTransactions, 'value');
    const totalOutcomeSum = sumBy(outcomeTransactions, 'value');
    const totalBalance = totalIncomeSum + totalOutcomeSum;

    const grouped = chain(outcomeTransactions)
        .groupBy('categoryId')
        .transform((acc, transactions, key) => {
            const { name: label } = categoriesById[key] || {};
            const sum = sumBy(transactions, 'value');

            acc.push({
                label,
                value: sum / totalOutcomeSum * 100
            });
        }, [])
        .value();

    return {
        values: grouped,
        totalOutcomeSum,
        totalIncomeSum,
        totalBalance
    }
};

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
        }, [])
        .value();
};

const INTERVALS_COUNT = 5;

export const getTrendsData = ({
    transactions: {
        byId
    },
    categories: {
        byId: categoriesById
    }
}) => {
    const transactionList = getTransactionsList(byId, categoriesById);

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

    const result = [];
    intervals.forEach((i, index) => {
        result.push({
            totalIncomeSum: incomeTransactionsStatistics[index],
            totalOutcomeSum: outcomeTransactionsStatistics[index]
        });
    });

    return result;
};

export const getViewType = state => state.transactions.viewType;
