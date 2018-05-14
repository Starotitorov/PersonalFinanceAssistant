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

const getIntervalNames = intervals =>
  intervals.map(([leftBorder]) => moment(leftBorder).format('MMMM'));

const getTransactionsStatisticsByIntervals = (transactions, intervals, exchangeRates) =>
  chain(transactions)
    .groupBy(({ date }) => findIndex(intervals, i => date >= i[0] && date < i[1]))
    .reduce((acc, transactions, key) => {
      if (key == -1) {
        return acc;
      }

      const totalSum = Math.abs(sumBy(transactions, transaction => getConvertedTransactionValue(transaction, exchangeRates)));

      const newArray = [...acc];

      newArray[key] = totalSum;

      return newArray;
    }, times(intervals.length, constant(0)))
    .value();

export const getTopPopularCategories = (transactions, exchangeRates, count) =>
  chain(transactions)
    .groupBy('categoryId')
    .reduce((acc, transactions) => {
      const totalSum = Math.abs(sumBy(transactions, transaction => getConvertedTransactionValue(transaction, exchangeRates)));
      const { id, name, icon } = transactions[0].category;

      return [...acc, { id, name, icon, sum: totalSum, currency: DEFAULT_BASE_CURRENCY }];
    }, [])
    .orderBy(['sum'], ['desc'])
    .take(count)
    .value();

const TOP_COUNT = 5;

export const getTrendsData = ({
  trends: {
    transactions: {
      byId
    },
    exchangeRates,
    dateRange: {
      from,
      to
    } = {}
  }
}) => {
  if (!from || !to) {
    return null;
  }

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

  const topIncomeCategories = getTopPopularCategories(incomeTransactions, exchangeRates, TOP_COUNT);
  const topOutcomeCategories = getTopPopularCategories(outcomeTransactions, exchangeRates, TOP_COUNT);

  return {
    income: incomeTransactionsStatistics,
    outcome: outcomeTransactionsStatistics,
    intervals: getIntervalNames(intervals),
    topOutcomeCategories,
    topIncomeCategories
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
