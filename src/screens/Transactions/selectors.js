import moment from 'moment';
import { chain, values, find, sumBy } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';
import { periodTypes } from './constants';
import filterTransactionsByAccount from 'src/helpers/filterTransactionsByAccount';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';

export const getFormattedCurrentDate = ({ transactionsList: { currentDate, periodType }}) => {
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

export const isTransactionsListDataFetching = ({
    transactionsList: {
        fetching
    }
}) => fetching;

export const getViewType = ({ transactionsList: { viewType }}) => viewType;

export const isTransactionsListDataRefreshing = ({
    transactionsList: {
        refreshing
    }
}) => refreshing;

export const getAllAccounts = ({ transactionsList: { accounts: { byId, order }}}) => {
    return order.map(id => byId[id]);
};

export const getAllCategories = ({ transactionsList: { categories: { byId, order }}}) => {
    return order.map(id => byId[id]);
};

export const getCurrentPeriodType = ({ transactionsList: { periodType }}) => periodType;

export const getSelectedAccountId = ({ transactionsList: { selectedAccount }}) => selectedAccount;

export const filterTransactionsByTimeRange = (
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

export const getTransactionsGroupedByCategories = ({
    transactionsList: {
        transactions: {
            byId,
        },
        categories: {
            byId: categoriesById
        },
        selectedAccount,
        currentDate,
        periodType
    }
}) => {
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

export const getTransactionsChartData = ({
    transactionsList: {
        transactions: {
            byId,
        },
        categories: {
            byId: categoriesById
        },
        selectedAccount,
        currentDate,
        periodType
    }
}) => {
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
