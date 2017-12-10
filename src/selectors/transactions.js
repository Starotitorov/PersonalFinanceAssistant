import { chain, values, find } from 'lodash';
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

export const getTransactionsGroupedByCategories = ({ transactions: { byId, currentDate, periodType }, categories: { byId: categoriesById } }) => {;
    const delta = find(values(periodTypes), { value: periodType }).single;
    const lowerBound = moment(currentDate).startOf(delta);
    const higherBound = moment(currentDate).endOf(delta);

    const transactions = values(byId)
        .map(transaction => {
            const { categoryTypeId } = categoriesById[transaction.categoryId];

            return {
                ...transaction,
                date: moment(transaction.date),
                value: (categoryTypeId === categoryTypes.INCOME_CATEGORY
                    ? 1 : -1) * transaction.value
            }
        })
        .filter(({ date }) => date >= lowerBound && date <= higherBound);

    const grouped = chain(transactions)
        .groupBy('categoryId')
        .transform((acc, transactions, key) => {
            const { name, icon } = categoriesById[key];
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
