/*
 * actions.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
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

export const resetCategoriesListData = createAction('CATEGORIES_LIST/RESET_CATEGORIES_LIST_DATA');

const fetchCategoriesListDataRequest = () => dispatch => api.fetchCategories()
  .then(({ categories }) => {
    dispatch(setCategories(categories));
  });

export const fetchCategoriesListData = () => async dispatch => {
  dispatch(fetchCategoriesListDataStart());

  try {
    await dispatch(fetchCategoriesListDataRequest());

    dispatch(fetchCategoriesListDataSuccess());
  } catch (e) {
    dispatch(fetchCategoriesListDataFailure(e));
  }
};

export const refreshCategoriesListData = () => async dispatch => {
  dispatch(refreshCategoriesListDataStart());

  try {
    await dispatch(fetchCategoriesListDataRequest());

    dispatch(refreshCategoriesListDataSuccess());
  } catch (e) {
    dispatch(refreshCategoriesListDataFailure(e));
  }
};

export const selectCategory = ({ navigation, id }) => (dispatch, getState) => {
  const { categoriesList: { categories: { byId }}} = getState();

  navigation.dispatch(NavigationActions.navigate({
    routeName: 'EditCategory',
    params: {
      category: byId[id]
    }
  }));
};
