const filterTransactionsByCategoryType = (transactions, categoryType) => transactions
  .filter(transaction => transaction.categoryTypeId === categoryType);

export default filterTransactionsByCategoryType;
