import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setCategories = createAction(
    'CATEGORIES/SET_CATEGORIES',
    categories => ({ categories })
);

export const selectCategory = createAction(
    'CATEGORIES/SELECT_CATEGORY',
    (id) => ({ id })
);

export const fetchCategoriesStart = createAction('CATEGORIES/FETCH_CATEGORIES_START');
export const fetchCategoriesFailure = createAction('CATEGORIES/FETCH_CATEGORIES_FAILURE');

export const refreshCategoriesStart = createAction('CATEGORIES/REFRESH_CATEGORIES_START');
export const refreshCategoriesFailure = createAction('CATEGORIES/REFRESH_CATEGORIES_FAILURE');

export const resetCategories = createAction('CATEGORIES/RESET_CATEGORIES');

const fetchCategoriesRequest = () => dispatch => {
    return api.fetchCategories()
        .then(response => response.json())
        .then(({ categories }) => {
            dispatch(setCategories(categories));
        });
};

export const fetchCategories = () => async dispatch => {
    dispatch(fetchCategoriesStart());

    try {
        await dispatch(fetchCategoriesRequest())
    } catch(e) {
        dispatch(fetchCategoriesFailure(e));
    }
};

export const refreshCategories = () => async dispatch => {
    dispatch(refreshCategoriesStart());

    try {
        await dispatch(fetchCategoriesRequest())
    } catch(e) {
        dispatch(refreshCategoriesFailure(e))
    }
};

export const addCategory = categoryData => dispatch => {
    return api.addCategory(categoryData)
        .then(() => {
            dispatch(fetchCategories());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'CategoryTabs' })
                ]
            }));
        });
};

export const updateCategory = categoryData => (dispatch, getState) => {
    const { categories: { selected } } = getState();

    return api.updateCategory(selected, categoryData)
        .then(() => {
            dispatch(fetchCategories());

            dispatch(NavigationActions.back());
        });
};

export const removeCategory = categoryData => (dispatch, getState) => {
    const { categories: { selected } } = getState();

    return api.removeCategory(selected)
        .then(() => {
            dispatch(fetchCategories());

            dispatch(NavigationActions.back());
        });
};
