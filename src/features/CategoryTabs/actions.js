import { NavigationActions } from 'react-navigation';
import { createAction } from 'redux-actions';
import { fetchCategories } from '../../services/database';

export const fetchCategoriesListDataStart = createAction('CATEGORIES_LIST/FETCH_CATEGORIES_LIST_DATA_START');
export const setCategoriesListData = createAction('CATEGORIES_LIST/SET_CATEGORIES_LIST_DATA');
export const fetchCategoriesListDataFailure = createAction('CATEGORIES_LIST/FETCH_CATEGORIES_LIST_DATA_FAILURE');

export const fetchCategoriesListData = () => async dispatch => {
  dispatch(fetchCategoriesListDataStart());

  try {
    const categories = await fetchCategories();

    dispatch(setCategoriesListData({ categories }));
  } catch(e) {
    dispatch(fetchCategoriesListDataFailure());
  }
};

export const addCategory = () => dispatch => {
  dispatch(NavigationActions.navigate({
    routeName: 'AddCategory'
  }));
};
