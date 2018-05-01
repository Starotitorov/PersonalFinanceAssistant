import { handleActions } from 'redux-actions';
import {
  fetchCategoriesListDataFailure,
  fetchCategoriesListDataStart,
  setCategoriesListData
} from './actions';
import { arrayToObjectById } from 'src/utils/index';

const initialState = {
  categories: {
    byId: {},
    order: []
  },
  fetching: false
};

const categoriesList = handleActions({
  [fetchCategoriesListDataStart]: state => ({ ...state, fetching: true }),
  [fetchCategoriesListDataFailure]: state => ({ ...state, fetching: false }),
  [setCategoriesListData]: (state, { payload: { categories }}) => ({
    ...state,
    categories: arrayToObjectById(categories),
    fetching: false
  })
}, initialState);

export default categoriesList;
