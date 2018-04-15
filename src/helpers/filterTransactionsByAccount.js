const filterTransactionsByAccount = (transactions, selected) =>
  transactions.filter(({ accountId }) => accountId === selected);

export default filterTransactionsByAccount;
