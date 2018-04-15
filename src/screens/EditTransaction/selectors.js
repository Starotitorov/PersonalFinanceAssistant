export const getEditTransactionFormInitialValues = ({
  editTransaction: {
    transaction: {
      value = '',
      note,
      date,
      userId,
      categoryId,
      accountId
    }
  }
}) => ({
  value: String(value),
  note,
  date,
  userId,
  categoryId,
  accountId
});

export const isTransactionFetching = ({
  editTransaction: {
    fetching
  }
}) => fetching;
