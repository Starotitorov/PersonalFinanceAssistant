/*
 * reducer.js
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

import { handleActions, combineActions } from 'redux-actions';
import {
  setAccounts,
  fetchAccountsListDataStart,
  fetchAccountListDataSuccess,
  fetchAccountsListDataFailure,
  resetAccountsListData,
  refreshAccountListDataSuccess,
  refreshAccountsListDataStart,
  refreshAccountsListDataFailure
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  accounts: {
    byId: {},
    order: []
  },
  fetching: false,
  refreshing: false
};

const accountsList = handleActions({
  [fetchAccountsListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [refreshAccountsListDataStart]: state => ({
    ...state,
    refreshing: true
  }),
  [combineActions(
    fetchAccountsListDataFailure,
    refreshAccountsListDataFailure,
    fetchAccountListDataSuccess,
    refreshAccountListDataSuccess
  )](state) {
    return {
      ...state,
      fetching: false,
      refreshing: false
    };
  },
  [setAccounts]: (state, action) => {
    const { accounts } = action.payload;

    return {
      ...state,
      accounts: arrayToObjectById(accounts)
    };
  },
  [resetAccountsListData]: () => initialState
}, initialState);

export default accountsList;
