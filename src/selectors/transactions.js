import * as periodTypes from 'src/constants/transactionPeriodTypes';

export const getCurrentPeriodType = state => state.transactions.periodType;

export const getFormattedCurrentDate = state => {
    const { currentDate, periodType } = state.transactions;

    if (periodType === periodTypes.YEARS) {
        return currentDate.format('YYYY');
    } else if (periodType === periodTypes.MONTHS) {
        return currentDate.format('MMMM YYYY');
    } else if (periodType === periodTypes.WEEKS) {
        const weekStart = currentDate.startOf('week').format('M.D');
        const weekEnd = currentDate.endOf('week').format('M.D');

        return currentDate.format(`[${weekStart} - ${weekEnd}] YYYY`);
    } else if (periodType === periodTypes.DAYS) {
        return currentDate.format('MMM Do YYYY')
    }
};
