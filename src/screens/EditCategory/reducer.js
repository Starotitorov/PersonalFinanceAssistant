import { handleActions } from 'redux-actions';
import {
  setCategory,
  fetchCategoryStart,
  fetchCategoryFailure
} from './actions';

const initialState = {
  category: {},
  fetching: false
};

const editCategory = handleActions({
  [fetchCategoryStart]: state => ({
    ...state,
    fetching: true
  }),
  [fetchCategoryFailure]: state => ({
    ...state,
    fetching: false
  }),
  [setCategory]: (state, { payload: { category }}) => ({
    category,
    fetching: false
  })
}, initialState);

export default editCategory;
