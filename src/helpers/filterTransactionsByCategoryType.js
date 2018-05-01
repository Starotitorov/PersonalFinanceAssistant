const filterTransactionsByCategoryType = (transactions, categoriesById, categoryType) => transactions
  .filter(transaction => categoriesById[transaction.categoryId].categoryTypeId === categoryType);

export default filterTransactionsByCategoryType;
