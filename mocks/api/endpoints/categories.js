/*
 * categories.js
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
  [`GET ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    return {
      categories: [
        {
          categoryTypeId: 0,
          icon: 'credit-card',
          id: 1,
          name: 'Salary',
        },
        {
          categoryTypeId: 1,
          icon: 'food',
          id: 2,
          name: 'Food',
        },
        {
          categoryTypeId: 1,
          icon: 'dumbbell',
          id: 3,
          name: 'Sport',
        }
      ]
    };
  },
  [`GET ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      category: {
        categoryTypeId: 1,
        icon: 'food',
        id: 2,
        name: 'Food',
      }
    };
  },
  [`POST ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    const { icon, name, categoryTypeId } = params.category;

    return {
      category: {
        id: 1000,
        icon,
        name,
        categoryTypeId,
      }
    };
  },
  [`PUT ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    const { id } = urlparams;
    const { icon, name, categoryTypeId } = params.category;

    return {
      category: {
        id,
        icon,
        name,
        categoryTypeId,
      }
    };
  },
  [`DELETE ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
