import { handleActions, combineActions } from 'redux-actions';
import {
  setCategories,
  fetchCategoriesListDataStart,
  fetchCategoriesListDataSuccess,
  fetchCategoriesListDataFailure,
  resetCategoriesListData,
  refreshCategoriesListDataSuccess,
  refreshCategoriesListDataFailure,
  refreshCategoriesListDataStart
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
  },
  [resetCategoriesListData]: () => initialState
}, initialState);

export default categoriesList;
