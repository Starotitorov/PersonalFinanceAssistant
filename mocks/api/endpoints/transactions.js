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

import config from '../../../src/config';

const API_URL = config.apiUrl;

export default {
  [`GET ${API_URL}/transactions`]: ({ method, url, params, urlparams, headers }) => {
    console.log('ACCOUNT ID:' + params.accountId);
    if (params.accountId === 'null') {
      return {
        transactions: []
      }
    }
    
    return {
      transactions: [
        {
          id: 1,
          accountId: 1,
          categoryId: 2,
          categoryTypeId: 1,
          value: 12.25,
          date: Date.now(),
          note: 'Transaction',
          account: {
            id: 1,
            currency: 'BYN'
          },
          category: {
            icon: 'food',
            id: 2,
            name: 'Food',
          }
        },
        {
          id: 2,
          accountId: 1,
          categoryId: 2,
          categoryTypeId: 1,
          value: 11.5,
          date: Date.now(),
          note: 'Transaction',
          account: {
            id: 1,
            currency: 'BYN'
          },
          category: {
            icon: 'food',
            id: 2,
            name: 'Food',
          }
        },
        {
          id: 3,
          accountId: 1,
          categoryId: 2,
          categoryTypeId: 1,
          value: 21,
          date: Date.now(),
          note: 'Transaction',
          account: {
            id: 1,
            currency: 'BYN'
          },
          category: {
            icon: 'food',
            id: 2,
            name: 'Food',
          }
        },
        {
          id: 4,
          accountId: 1,
          categoryId: 3,
          categoryTypeId: 1,
          value: 50,
          date: Date.now(),
          note: 'Transaction',
          account: {
            id: 1,
            currency: 'BYN'
          },
          category: {
            icon: 'dumbbell',
            id: 3,
            name: 'Sport',
          }
        },
      ]
    };
  },
  [`GET ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      transaction: {
        id: 3,
        accountId: 1,
        categoryId: 2,
        categoryTypeId: 1,
        value: 12.25,
        date: Date.now(),
        note: 'Transaction',
        account: {
          id: 1,
          currency: 'BYN'
        },
        category: {
          icon: 'food',
          id: 2,
          name: 'Food',
        },
      }
    };
  },
  [`POST ${API_URL}/transactions`]: ({ method, url, params, urlparams, headers }) => {
    return {
      transaction: {
        id: 1000,
        accountId: 1,
        categoryId: 2,
        categoryTypeId: 1,
        value: 12.25,
        date: Date.now(),
        note: 'Transaction',
        account: {
          id: 1,
          currency: 'BYN'
        },
        category: {
          icon: 'food',
          id: 2,
          name: 'Food',
        },
      }
    };
  },
  [`PUT ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      transaction: {
        id: 1000,
        accountId: 1,
        categoryId: 2,
        categoryTypeId: 1,
        value: 12.25,
        date: Date.now(),
        note: 'Transaction',
        account: {
          id: 1,
          currency: 'BYN'
        },
        category: {
          icon: 'food',
          id: 2,
          name: 'Food',
        },
      }
    };
  },
  [`DELETE ${API_URL}/transactions/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
