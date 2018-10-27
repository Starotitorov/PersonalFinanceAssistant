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
  fetchTrendsDataStart,
  fetchTrendsDataSuccess,
  fetchTrendsDataFailure,
  setTransactions,
  setExchangeRates,
  setDateRange,
  resetTransactions,
  resetTrendsData
} from './actions';
import { arrayToObjectById } from 'src/utils';

const initialState = {
  transactions: {
    byId: {},
    order: []
  },
  dateRange: {},
  exchangeRates: {},
  fetching: false
};

const trends = handleActions({
  [fetchTrendsDataStart]: state => ({
    ...state,
    fetching: true
  }),
  [combineActions(fetchTrendsDataSuccess, fetchTrendsDataFailure)]: state => ({
    ...state,
    fetching: false
  }),
  [setTransactions]: (state, action) => {
    const { transactions } = action.payload;

    return {
      ...state,
      transactions: arrayToObjectById(transactions)
    };
  },
  [setDateRange]: (state, { payload: { dateRange }}) => ({ ...state, dateRange }),
  [setExchangeRates]: (state, { payload: { exchangeRates }}) => ({ ...state, exchangeRates }),
  [resetTransactions]: state => ({ ...state, transactions: arrayToObjectById([]) }),
  [resetTrendsData]: () => initialState
}, initialState);

export default trends;
