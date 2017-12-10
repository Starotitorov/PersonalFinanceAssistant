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
export const resetCategories = createAction('CATEGORIES/RESET_CATEGORIES');

export const fetchCategories = () => dispatch => {
    dispatch(fetchCategoriesStart());

    return api.fetchCategories()
        .then(response => response.json())
        .then(({ categories }) => {
            dispatch(setCategories(categories));
        });
};

export const addCategory = categoryData => dispatch => {
    return api.addCategory(categoryData)
        .then(async () => {
            await dispatch(fetchCategories());

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
        .then(async () => {
            await dispatch(fetchCategories());

            dispatch(NavigationActions.back());
        });
};

export const removeCategory = categoryData => (dispatch, getState) => {
    const { categories: { selected } } = getState();

    return api.removeCategory(selected)
        .then(async () => {
            await dispatch(fetchCategories());

            dispatch(NavigationActions.back());
        });
};