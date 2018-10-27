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

export const setAccounts = createAction(
  'ACCOUNTS_LIST/SET_ACCOUNTS',
  accounts => ({ accounts })
);

export const fetchAccountsListDataStart = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_START');
export const fetchAccountsListDataFailure = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_FAILURE');
export const fetchAccountListDataSuccess = createAction('ACCOUNTS_LIST/FETCH_ACCOUNTS_LIST_DATA_SUCCESS');

export const refreshAccountsListDataStart = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_START');
export const refreshAccountsListDataFailure = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_FAILURE');
export const refreshAccountListDataSuccess = createAction('ACCOUNTS_LIST/REFRESH_ACCOUNTS_LIST_DATA_SUCCESS');

export const resetAccountsListData = createAction('ACCOUNTS_LIST/RESET_ACCOUNTS_LIST_DATA');

const fetchAccountsListDataRequest = () => dispatch => api.fetchAccounts()
  .then(({ accounts }) => {
    dispatch(setAccounts(accounts));
  });

export const fetchAccountsListData = () => async dispatch => {
  dispatch(fetchAccountsListDataStart());

  try {
    await dispatch(fetchAccountsListDataRequest());

    dispatch(fetchAccountListDataSuccess());
  } catch (e) {
    dispatch(fetchAccountsListDataFailure(e));
  }
};

export const refreshAccountsListData = () => async dispatch => {
  dispatch(refreshAccountsListDataStart());

  try {
    await dispatch(fetchAccountsListDataRequest());

    dispatch(refreshAccountListDataSuccess());
  } catch (e) {
    dispatch(refreshAccountsListDataFailure(e));
  }
};

export const addAccount = id => dispatch => {
  dispatch(NavigationActions.navigate({ routeName: 'AddAccount' }));
};

export const editAccount = id => (dispatch, getState) => {
  const { accountsList: { accounts: { byId }}} = getState();

  dispatch(NavigationActions.navigate({
    routeName: 'EditAccount',
    params: {
      account: byId[id]
    }
  }));
};
