import { handleActions, combineActions } from 'redux-actions';
import {
  setCategories,
  fetchCategoriesListDataStart,
  fetchCategoriesListDataSuccess,
  fetchCategoriesListDataFailure,
  refreshCategoriesListDataStart,
  refreshCategoriesListDataSuccess,
  refreshCategoriesListDataFailure
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  categories: {
    byId: {},
    order: []
  },
  fetching: false,
  refreshing: false
};

const categoriesList = handleActions({
  [fetchCategoriesListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [refreshCategoriesListDataStart]: state => ({
    ...state,
    refreshing: true
  }),
  [combineActions(
    fetchCategoriesListDataSuccess,
    fetchCategoriesListDataFailure,
    refreshCategoriesListDataSuccess,
    refreshCategoriesListDataFailure
  )](state) {
    return {
      ...state,
      refreshing: false,
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
