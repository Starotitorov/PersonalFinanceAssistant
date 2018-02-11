const filterTransactionsByCategoryType = (transactions, categoryType) => {
    return transactions
        .filter(transaction => transaction.categoryTypeId === categoryType);
};

export default filterTransactionsByCategoryType;
