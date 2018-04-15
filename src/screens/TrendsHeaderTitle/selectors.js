import { getAllAccounts } from '../Trends/selectors';

export const getSelectInputOptionsFromAllAccounts = state => {
  const accounts = getAllAccounts(state);

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
