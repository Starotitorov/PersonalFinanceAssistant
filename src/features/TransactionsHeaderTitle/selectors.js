import { getAllAccounts } from '../Transactions/selectors';

export const getSelectInputOptionsFromAllAccounts = state => {
  const accounts = getAllAccounts(state);

  const accountOptions = [{
    label: 'Select account...',
    value: null
  }];

  return accountOptions.concat(
    accounts.map(({ name, id, icon }) => ({
      icon,
      label: name,
      value: id
    }))
  );
};
