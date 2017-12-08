import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setCategories = createAction(
    'CATEGORIES/SET_CATEGORIES',
    categories => ({ categories })
);

export const fetchCategoriesStart = createAction('CATEGORIES/FETCH_CATEGORIES_START');

export const fetchCategories = () => dispatch => {
    dispatch(fetchCategoriesStart());

    api.fetchCategories()
        .then(response => response.json())
        .then(({ categories }) => {
            dispatch(setCategories(categories));
        });
};

export const addCategory = categoryData => dispatch => {
    return api.addCategory(categoryData)
        .then(async () => {
            await dispatch(fetchCategories());

            dispatch(NavigationActions.back());
        })
};
