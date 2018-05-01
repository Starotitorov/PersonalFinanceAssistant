import { createAccountsTable, resetAccounts } from './accounts';
import { createCategoriesTable, resetCategories } from './categories';
import { createTransfersTable, resetTransfers } from './transfers';
import { createTransactionsTable, resetTransactions } from './transactions';

export * from './accounts';
export * from './categories';
export * from './transfers';
export * from './transactions';

export const initialize = async () => {
  await createAccountsTable();

  await createCategoriesTable();

  await createTransactionsTable();

  await createTransfersTable();
};

export const reset = async () => {
  await resetTransactions();

  await resetTransfers();

  await resetAccounts();

  await resetCategories();
};
