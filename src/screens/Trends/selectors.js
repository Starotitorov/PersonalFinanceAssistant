import { chain, sumBy, findIndex, times, constant } from 'lodash';
import moment from 'moment';
import { get } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';
import { getTimeIntervals } from './helpers';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency'

const DATE_FORMAT = 'YYYY-MM-DD';
const getConvertedTransactionValue = ({ value, date, account: { currency }} = {}, exchangeRates) =>
  value * get(exchangeRates, `[${currency}_${DEFAULT_BASE_CURRENCY}].val[${date.format(DATE_FORMAT)}]`, 1);

const getTransactionsStatisticsByIntervals = (transactions, intervals, exchangeRates) =>
  chain(transactions)
    .groupBy(({ date }) => findIndex(intervals, i => date >= i[0] && date < i[1]))
    .transform((acc, transactions, key) => {
      if (key == -1) {
        return;
      }

      const totalSum = Math.abs(sumBy(transactions, transaction => getConvertedTransactionValue(transaction, exchangeRates)));

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
    },
    exchangeRates
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
    intervals,
    exchangeRates
  );
  const outcomeTransactionsStatistics = getTransactionsStatisticsByIntervals(
    outcomeTransactions,
    intervals,
    exchangeRates
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
