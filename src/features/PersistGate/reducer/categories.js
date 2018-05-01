import { handleActions } from 'redux-actions';
import { createCategory, editCategory, deleteCategoryFromList, resetCategories } from '../actions/categories';
import { insert, update, remove } from '../../../utils/stateHelpers';

export const createCategoryModel = ({ name, icon, categoryTypeId }) => ({ name, icon, categoryTypeId });

const initialState = {
  byId: {},
  order: []
};

const categoriesReducer = handleActions({
  [createCategory]: (state, { payload }) => insert(state, createCategoryModel(payload)),
  [editCategory]: (state, { payload }) => update(state, payload.id, payload.category),
  [deleteCategoryFromList]: (state, { payload }) => remove(state, payload),
  [resetCategories]: () => initialState
}, initialState);

export default categoriesReducer;
