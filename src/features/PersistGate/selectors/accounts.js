import R from 'ramda';
import * as categoriesTypes from 'src/constants/categoryTypes';

export const isExpense = R.curry((categoriesById, transaction) => R.propEq(
  'categoryTypeId', categoriesTypes.OUTCOME_CATEGORY, categoriesById[transaction.categoryId],
));

const transactionsSum = (transactions, categories, accId) => R.reduce(
  (sum, transaction) => {
    let delta = 0;

    if (R.propEq('accountId', accId, transaction)) {
      delta = transaction.value * (isExpense(categories.byId, transaction) ? -1 : 1);
    }

    return sum + delta;
  }, 0, R.values(transactions.byId),
);

const transfersSum = (transfers, accId) => R.reduce((sum, transfer) => {
  let delta = 0;

  if (R.propEq('toAccountId', accId, transfer)) {
    delta = transfer.value * transfer.exchangeRate;
  } else if (R.propEq('fromAccountId', accId, transfer)) {
    delta = -transfer.value;
  }

  return sum + delta;
}, 0, R.values(transfers.byId));

export const getAllAccounts = ({
  storage: {
    accounts: {
      byId,
      order
    },
    transfers,
    transactions,
    categories
  }
}) => order.map(id => ({
  ...byId[id],
  balance: byId[id].initialBalance + transfersSum(transfers, id) + transactionsSum(transactions, categories, id)
}));
