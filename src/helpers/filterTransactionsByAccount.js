import { ALL_ACCOUNTS } from '../constants/accounts';

const filterTransactionsByAccount = (transactions, selected) =>
  selected !== ALL_ACCOUNTS ?
    transactions.filter(({ accountId }) => accountId === selected) :
    transactions;

export default filterTransactionsByAccount;
