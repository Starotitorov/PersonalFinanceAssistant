/*
 * accounts.js
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
  [`GET ${API_URL}/accounts`]: ({ method, url, params, urlparams, headers }) => {
    return {
      accounts: [
        {
          id: 1,
          name: 'Credit card',
          icon: 'credit-card',
          balance: 2000,
          currency: 'BYN',
          initialDate: Date.now()
        },
        {
          id: 2,
          name: 'Cash',
          icon: 'coin',
          balance: 100,
          currency: 'USD',
          initialDate: Date.now()
        }
      ]
    };
  },
  [`GET ${API_URL}/accounts/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      account: {
        id: 1,
        name: 'Credit card',
        icon: 'credit-card',
        balance: 2000,
        currency: 'BYN'
      }
    };
  },
  [`POST ${API_URL}/accounts`]: ({ method, url, params, urlparams, headers }) => {
    const { balance, name, initialDate } = params.account;

    return {
      account: {
        id: 1000,
        name,
        balance,
        initialDate,
        currency: 'BYN'
      }
    };
  },
  [`PUT ${API_URL}/accounts/{id}`]: ({ method, url, params, urlparams, headers }) => {
    const { id } = urlparams;
    const { name, initialDate } = params.account;

    return {
      account: {
        id,
        name,
        initialDate,
        currency: 'BYN'
      }
    };
  },
  [`DELETE ${API_URL}/accounts/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
