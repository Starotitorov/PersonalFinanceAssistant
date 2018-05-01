import { chain, sumBy, findIndex, times, constant } from 'lodash';
import moment from 'moment';
import { get } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';
import { getTimeIntervals } from './helpers';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency'

const DATE_FORMAT = 'YYYY-MM-DD';
const getConvertedTransactionValue = ({ value, date, currency } = {}, exchangeRates) =>
  value * get(exchangeRates, `[${currency}_${DEFAULT_BASE_CURRENCY}].val[${date.format(DATE_FORMAT)}]`, 1);

const getIntervalNames = intervals =>
  intervals.map(([leftBorder]) => moment(leftBorder).format('MMMM'));

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

export const getTopPopularCategories = (transactions, categoriesById, exchangeRates, count) =>
  chain(transactions)
    .groupBy('categoryId')
    .reduce((acc, transactions, key) => {
      const totalSum = Math.abs(sumBy(transactions, transaction => getConvertedTransactionValue(transaction, exchangeRates)));
      const { id, name, icon } = categoriesById[key];

      return [...acc, { id, name, icon, sum: totalSum, currency: DEFAULT_BASE_CURRENCY }];
    }, [])
    .orderBy(['sum'], ['desc'])
    .take(count)
    .value();

export const filterTransactionsByDateRange = (transactions, from, to) =>
  transactions.filter(({ date }) => date >= moment(from) && date <= moment(to));

const TOP_COUNT = 5;

export const getTrendsData = ({
  trends: {
    dateRange: {
      from,
      to
    },
    transactions: {
      byId
    },
    categories: {
      byId: categoriesById
    },
    accounts: {
      byId: accountsById
    },
    exchangeRates
  }
}) => {
  const transactions = getTransactionsList(byId, categoriesById, accountsById);
  const transactionList = filterTransactionsByDateRange(transactions, from, to);

  const incomeTransactions = filterTransactionsByCategoryType(
    transactionList,
    categoriesById,
    categoryTypes.INCOME_CATEGORY
  );
  const outcomeTransactions = filterTransactionsByCategoryType(
    transactionList,
    categoriesById,
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

  const topIncomeCategories = getTopPopularCategories(incomeTransactions, categoriesById, exchangeRates, TOP_COUNT);
  const topOutcomeCategories = getTopPopularCategories(outcomeTransactions, categoriesById, exchangeRates, TOP_COUNT);

  return {
    income: incomeTransactionsStatistics,
    outcome: outcomeTransactionsStatistics,
    intervals: getIntervalNames(intervals),
    topOutcomeCategories,
    topIncomeCategories
  };
};

export const getDateRange = ({
  trends: {
    dateRange
  }
}) => dateRange;

export const isTrendsDataFetching = ({
  trends: {
    fetching
  }
}) => fetching;

export const isErrorState = ({
  trends: {
    error
  }
}) => error;
