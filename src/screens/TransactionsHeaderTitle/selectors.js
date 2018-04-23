import { getAllAccounts } from '../Transactions/selectors';
import { ALL_ACCOUNTS } from 'src/constants/accounts';

export const getSelectInputOptionsFromAllAccounts = state => {
  const accounts = getAllAccounts(state);

  const accountOptions = [{
    label: 'All accounts',
    value: ALL_ACCOUNTS
  }];

  return accountOptions.concat(
    accounts.map(({ name, id, icon }) => ({
      icon,
      label: name,
      value: id
    }))
  );
};
