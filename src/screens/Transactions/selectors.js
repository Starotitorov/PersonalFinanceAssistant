import moment from 'moment';
import { chain, values, find, sumBy, get } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';
import { periodTypes } from './constants';
import filterTransactionsByCategoryType from 'src/helpers/filterTransactionsByCategoryType';
import getTransactionsList from 'src/helpers/getTransactionsList';
import shortid from 'shortid';

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
    return currentDate.format('MMM Do YYYY');
  }
};

export const getCurrentDate = ({
  transactionsList: {
    currentDate
  }
}) => currentDate;

export const isTransactionsListDataFetching = ({
  transactionsList: {
    fetching
  }
}) => fetching;

export const isTransactionsListDataRefreshing = ({
  transactionsList: {
    refreshing
  }
}) => refreshing;

export const getViewType = ({ transactionsList: { viewType }}) => viewType;

export const getAllAccounts = ({ transactionsList: { accounts: { byId, order }}}) => order.map(id => byId[id]);

export const getAllCategories = ({ transactionsList: { categories: { byId, order }}}) => order.map(id => byId[id]);

export const getCurrentPeriodType = ({ transactionsList: { periodType }}) => periodType;

export const getSelectedAccountId = ({ transactionsList: { selectedAccount }}) => selectedAccount;

export const isTransactionsFetching = ({ transactionsList: { transactionsFetching }}) => transactionsFetching;

export const getTimeRange = ({
  transactionsList: {
    currentDate,
    periodType
  }
}) => {
  const delta = find(values(periodTypes), { value: periodType }).single;
  const fromDate = moment(currentDate).startOf(delta);
  const toDate = moment(currentDate).endOf(delta);

  return {
    fromDate,
    toDate
  }
};

export const getTransactionsSum = transactions => sumBy(transactions, 'value');

export const getTransactionsGroupedByCategories = ({
  transactionsList: {
    transactions: {
      byId
    },
    categories: {
      byId: categoriesById
    },
    accounts: {
      byId: accountsById
    },
    selectedAccount
  }
}) => {
  const account = accountsById[selectedAccount];
  const currency = account ? account.currency : null;
  const transactionsList = getTransactionsList(byId);

  return chain(transactionsList)
    .groupBy('categoryId')
    .transform((acc, transactions, key) => {
      const { name, icon } = get(categoriesById, key, {});
      const sum = getTransactionsSum(transactions);

      acc.push({
        id: shortid(),
        category: {
          name,
          icon,
          sum,
          currency
        },
        transactions: transactions.map(transaction => ({ ...transaction, currency }))
      });
    }, [])
    .value();
};

export const getTransactionsChartData = ({
  transactionsList: {
    transactions: {
      byId
    },
    categories: {
      byId: categoriesById
    },
    accounts: {
      byId: accountsById
    },
    selectedAccount
  }
}) => {
  const account = accountsById[selectedAccount];
  const currency = account ? account.currency : null;
  const transactions = getTransactionsList(byId);

  const incomeTransactions = filterTransactionsByCategoryType(transactions, categoryTypes.INCOME_CATEGORY);
  const outcomeTransactions = filterTransactionsByCategoryType(transactions, categoryTypes.OUTCOME_CATEGORY);

  const totalIncomeSum = getTransactionsSum(incomeTransactions);
  const totalOutcomeSum = getTransactionsSum(outcomeTransactions);

  const totalBalance = totalIncomeSum + totalOutcomeSum;

  const grouped = chain(outcomeTransactions)
    .groupBy('categoryId')
    .transform((acc, transactions, key) => {
      const { name: label } = get(categoriesById, key, {});
      const sum = getTransactionsSum(transactions);

      acc.push({
        label,
        value: Math.round((sum / totalOutcomeSum) * 100)
      });
    }, [])
    .value();

  return {
    values: grouped,
    totalOutcomeSum,
    totalIncomeSum,
    totalBalance,
    currency
  };
};
