import { createAction } from 'redux-actions';
import { getAllTransactions } from '../selectors/transactions';
import { setTransactions } from './transactions';

export const createCategory = createAction('CATEGORIES/CREATE_CATEGORY');

export const editCategory = createAction(
  'CATEGORIES/EDIT_CATEGORY',
  (id, category) => ({ id, category })
);

export const resetCategories = createAction('CATEGORIES/RESET_CATEGORIES');

export const deleteCategoryFromList = createAction('CATEGORIES/DELETE_CATEGORY');

export const deleteCategory = id => (dispatch, getState) => {
  const transactions = getAllTransactions(getState());

  const newTransactionsList = transactions.filter(transaction => transaction.categoryId !== id);

  dispatch(setTransactions(newTransactionsList));

  dispatch(deleteCategoryFromList(id));
};
