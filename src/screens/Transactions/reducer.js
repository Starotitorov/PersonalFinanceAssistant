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

import moment from 'moment';
import { handleActions, combineActions } from 'redux-actions';
import { arrayToObjectById } from 'src/utils';
import {
  changeCurrentDate,
  setPeriodView,
  fetchTransactionsListDataStart,
  fetchTransactionsListDataFailure,
  fetchTransactionsListDataSuccess,
  setTransactions,
  setCategories,
  setAccounts,
  setSelectedAccount,
  setViewType,
  fetchTransactionsStart,
  fetchTransactionsFailure,
  resetTransactions,
  resetTransactionsListData,
  refreshTransactionsListDataFailure,
  refreshTransactionsListDataSuccess,
  refreshTransactionsListDataStart
} from './actions';
import { periodTypes, LIST } from './constants';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  accounts: {
    byId: {},
    order: []
  },
  categories: {
    byId: {},
    order: []
  },
  currentDate: moment(),
  periodType: periodTypes.WEEK.value,
  fetching: false,
  refreshing: false,
  selectedAccount: null,
  transactionsFetching: false,
  viewType: LIST
};

const transactionsList = handleActions({
  [changeCurrentDate]: (state, action) => ({
    ...state,
    currentDate: action.payload.currentDate
  }),
  [setPeriodView]: (state, action) => ({
    ...state,
    periodType: action.payload.periodType
  }),
  [fetchTransactionsListDataStart]: (state) => ({
    ...state,
    fetching: true
  }),
  [refreshTransactionsListDataStart]: state => ({
    ...state,
    refreshing: true
  }),
  [fetchTransactionsStart]: state => ({
    ...state,
    transactionsFetching: true
  }),
  [fetchTransactionsFailure]: state => ({
    ...state,
    transactionsFetching: false
  }),
  [combineActions(
    fetchTransactionsListDataSuccess,
    fetchTransactionsListDataFailure,
    refreshTransactionsListDataSuccess,
    refreshTransactionsListDataFailure
  )](state) {
    return {
      ...state,
      fetching: false,
      refreshing: false
    };
  },
  [setTransactions]: (state, action) => {
    const { transactions } = action.payload;

    return {
      ...state,
      transactions: arrayToObjectById(transactions),
      transactionsFetching: false
    };
  },
  [setAccounts]: (state, action) => {
    const { accounts } = action.payload;

    return {
      ...state,
      accounts: arrayToObjectById(accounts)
    };
  },
  [setCategories]: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories: arrayToObjectById(categories)
    };
  },
  [setSelectedAccount]: (state, action) => ({
    ...state,
    selectedAccount: action.payload.accountId
  }),
  [setViewType]: (state, { payload: { viewType }}) => ({
    ...state,
    viewType
  }),
  [resetTransactions]: state => ({ ...state, transactions: arrayToObjectById([]) }),
  [resetTransactionsListData]: () => initialState
}, initialState);

export default transactionsList;
