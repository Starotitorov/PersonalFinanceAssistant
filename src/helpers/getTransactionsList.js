import moment from 'moment';
import { chain, values } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';

const getTransactionsList = (transactionsById, categoriesById, accountsById) =>
  chain(values(transactionsById))
    .reduce((acc, transaction) => {
      const category = categoriesById[transaction.categoryId];
      const account = accountsById[transaction.accountId];

      return category && account ? [...acc, {
        ...transaction,
        currency: account.currency,
        date: moment(transaction.date),
        value: (category.categoryTypeId === categoryTypes.INCOME_CATEGORY ? 1 : -1) * transaction.value
      }] : acc;
    }, [])
    .value();

export default getTransactionsList;
