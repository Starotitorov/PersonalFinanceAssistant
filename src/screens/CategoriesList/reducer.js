import { handleActions, combineActions } from 'redux-actions';
import {
  setCategories,
  fetchCategoriesListDataStart,
  fetchCategoriesListDataSuccess,
  fetchCategoriesListDataFailure
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  categories: {
    byId: {},
    order: []
  },
  fetching: false
};

const categoriesList = handleActions({
  [fetchCategoriesListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [combineActions(
    fetchCategoriesListDataSuccess,
    fetchCategoriesListDataFailure
  )](state) {
    return {
      ...state,
      fetching: false
    };
  },
  [setCategories]: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories: arrayToObjectById(categories)
    };
  }
}, initialState);

export default categoriesList;
