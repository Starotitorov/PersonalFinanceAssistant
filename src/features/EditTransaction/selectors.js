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
