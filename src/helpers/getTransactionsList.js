import moment from 'moment';
import { chain, values } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';

const getTransactionsList = transactionsById =>
  chain(values(transactionsById))
    .map(transaction => ({
      ...transaction,
      date: moment(transaction.date),
      value: (transaction.categoryTypeId === categoryTypes.INCOME_CATEGORY ? 1 : -1) * transaction.value
    }))
    .value();

export default getTransactionsList;
