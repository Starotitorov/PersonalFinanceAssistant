import { chain, values, find, sumBy } from 'lodash';
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
        categoriesById,
        currentDate,
        periodType
    }
) => {
    const delta = find(values(periodTypes), { value: periodType }).single;
    const lowerBound = moment(currentDate).startOf(delta);
    const higherBound = moment(currentDate).endOf(delta);

    return transactions
        .map(transaction => {
            const { categoryTypeId } = categoriesById[transaction.categoryId];

            return {
                ...transaction,
                date: moment(transaction.date),
                categoryTypeId,
                value: (categoryTypeId === categoryTypes.INCOME_CATEGORY
                    ? 1 : -1) * transaction.value
            }
        })
        .filter(({ date }) => date >= lowerBound && date <= higherBound);
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
    const transactionsList = values(byId);
    const filteredByAccount = filterTransactionsByAccount(transactionsList, selectedAccount);
    const transactions = filterTransactionsByTimeRange({
        transactions: filteredByAccount,
        categoriesById,
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
    const transactionsList = values(byId);
    const filteredByAccount = filterTransactionsByAccount(transactionsList, selectedAccount);
    const transactions = filterTransactionsByTimeRange({
        transactions: filteredByAccount,
        categoriesById,
        currentDate,
        periodType
    });

    const incomeTransactions = transactions
        .filter(transaction => transaction.categoryTypeId === categoryTypes.INCOME_CATEGORY);
    const outcomeTransactions = transactions
        .filter(transaction => transaction.categoryTypeId === categoryTypes.OUTCOME_CATEGORY);

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

export const getViewType = state => state.transactions.viewType;
