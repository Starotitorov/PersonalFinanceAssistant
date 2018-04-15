export const getSelectInputOptionsFromAllAccounts = ({ addTransaction: { accounts }}) => {
  const accountOptions = [{
    label: 'Select account...',
    value: null
  }];

  return accountOptions.concat(
    accounts.map(({ name, id }) => ({
      label: name,
      value: id
    }))
  );
};

export const getSelectInputOptionsFromAllCategories = ({ addTransaction: { categories }}) => {
  const categoryOptions = [{
    label: 'Select category...',
    value: null
  }];

  return categoryOptions.concat(
    categories.map(({ name, id }) => ({
      label: name,
      value: id
    }))
  );
};

export const getAddTransactionFormOptions = state => ({
  accounts: getSelectInputOptionsFromAllAccounts(state),
  categories: getSelectInputOptionsFromAllCategories(state)
});
