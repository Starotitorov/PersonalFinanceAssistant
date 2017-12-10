import { chain } from 'lodash';
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

export const formatTransactionsData = (transactions, categoriesById) => {
    return chain(transactions)
        .groupBy('categoryId')
        .transform((acc, value, key) => {
            const { name, icon } = categoriesById[key];
            const sum = value.reduce((sum, value) => sum + value, 0);
            const transactions = value.map(({ date, ...rest }) => {
                return {
                    ...rest,
                    date: moment(date)
                }
            });

            return {
                category: {
                    name,
                    icon,
                    sum
                },
                transactions
            };
        }, []);
};