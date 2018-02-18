import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const setCategories = createAction(
    'CATEGORIES_LIST/SET_CATEGORIES',
    categories => ({ categories })
);

export const fetchCategoriesListDataStart = createAction('CATEGORIES_LIST/FETCH_CATEGORIES_LIST_DATA_START');
export const fetchCategoriesListDataFailure = createAction('CATEGORIES_LIST/FETCH_CATEGORIES_LIST_DATA_FAILURE');
export const fetchCategoriesListDataSuccess = createAction('CATEGORIES_LIST/FETCH_CATEGORIES_LIST_DATA_SUCCESS');

export const refreshCategoriesListDataStart = createAction('CATEGORIES_LIST/REFRESH_CATEGORIES_LIST_DATA_START');
export const refreshCategoriesListDataFailure = createAction('CATEGORIES_LIST/REFRESH_CATEGORIES_LIST_DATA_FAILURE');
export const refreshCategoriesListDataSuccess = createAction('CATEGORIES_LIST/REFRESH_CATEGORIES_LIST_DATA_SUCCESS');

const fetchCategoriesListDataRequest = () => dispatch => {
    return api.fetchCategories()
        .then(({ categories }) => {
            dispatch(setCategories(categories));
        });
};

export const fetchCategoriesListData = () => async dispatch => {
    dispatch(fetchCategoriesListDataStart());

    try {
        await dispatch(fetchCategoriesListDataRequest());

        dispatch(fetchCategoriesListDataSuccess());
    } catch(e) {
        dispatch(fetchCategoriesListDataFailure(e));
    }
};

export const refreshCategoriesListData = () => async dispatch => {
    dispatch(refreshCategoriesListDataStart());

    try {
        await dispatch(fetchCategoriesListDataRequest());

        dispatch(refreshCategoriesListDataSuccess());
    } catch(e) {
        dispatch(refreshCategoriesListDataFailure(e));
    }
};

export const selectCategory = id => dispatch => {
    dispatch(NavigationActions.navigate({
        routeName: 'EditCategory',
        params: {
            id
        }
    }));
};
