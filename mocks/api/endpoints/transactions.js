/*
 * transactions.js
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
import { API_URL } from '../config';

export default {
  [`GET ${API_URL}/transactions`]: ({ method, url, params, urlparams, headers }) => {
    return {
      transactions: [
        {
          id: 10001,
          accountId: 1,
          categoryId: 1,
          value: 200,
          date: Date.now(),
          note: 'Transaction'
        },
        {
          id: 10002,
          accountId: 1,
          categoryId: 1,
          value: 200,
          date: Date.now(),
          note: 'Transaction'
        },
        {
          id: 10003,
          accountId: 1,
          categoryId: 1,
          value: 200,
          date: Date.now(),
          note: 'Transaction'
        },
        {
          id: 10004,
          accountId: 1,
          categoryId: 2,
          value: 200,
          date: Date.now(),
          note: 'Transaction'
        }
      ]
    };
  },
  [`GET ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      transaction: {
        id: 10004,
        accountId: 1,
        categoryId: 2,
        value: 200,
        date: Date.now(),
        note: 'Transaction'
      }
    };
  },
  [`POST ${API_URL}/transactions`]: ({ method, url, params, urlparams, headers }) => {
    const { accountId, categoryId, value, date, note } = params.transaction;

    return {
      transaction: {
        id: 10001,
        accountId,
        categoryId,
        value,
        date,
        note
      }
    };
  },
  [`PUT ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    const { accountId, categoryId, value, date, note } = params.transaction;
    const { id } = urlparams;

    return {
      transaction: {
        id,
        accountId,
        categoryId,
        value,
        date,
        note
      }
    };
  },
  [`DELETE ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
