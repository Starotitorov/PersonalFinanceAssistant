import { chain, sumBy, findIndex, times, constant } from 'lodash';
import moment from 'moment';
import * as categoryTypes from 'src/constants/categoryTypes';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';
import { getTimeIntervals } from './helpers';

const getTransactionsStatisticsByIntervals = (transactions, intervals) =>
  chain(transactions)
    .groupBy(({ date }) => findIndex(intervals, i => date >= i[0] && date < i[1]))
    .transform((acc, transactions, key) => {
      if (key == -1) {
        return;
      }

      const totalSum = Math.abs(sumBy(transactions, 'value'));

      acc[key] = totalSum;
    }, times(intervals.length, constant(0)))
    .value();

const getIntervalNames = intervals =>
  intervals.map(([leftBorder]) => moment(leftBorder).format('MMMM'));

export const getTrendsData = ({
  trends: {
    transactions: {
      byId
    },
    dateRange: {
      from,
      to
    }
  }
}) => {
  const transactionList = getTransactionsList(byId);

  const incomeTransactions = filterTransactionsByCategoryType(
    transactionList,
    categoryTypes.INCOME_CATEGORY
  );
  const outcomeTransactions = filterTransactionsByCategoryType(
    transactionList,
    categoryTypes.OUTCOME_CATEGORY
  );

  const intervals = getTimeIntervals(from, to);

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
    outcome: outcomeTransactionsStatistics,
    intervals: getIntervalNames(intervals)
  };
};

export const isTrendsDataFetching = ({
  trends: {
    fetching
  }
}) => fetching;

export const getDateRange = ({
  trends: {
    dateRange
  }
}) => dateRange;
