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

import { API_URL } from '../config';

export default {
  [`GET ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    return {
      categories: [
        {
          categoryTypeId: 0,
          icon: 'cash',
          id: 0,
          name: 'Salary',
          userId: 0
        },
        {
          categoryTypeId: 1,
          icon: 'food',
          id: 1,
          name: 'Food',
          userId: 0
        },
        {
          categoryTypeId: 1,
          icon: 'cat',
          id: 2,
          name: 'C.A.T.',
          userId: 0
        }
      ]
    };
  },
  [`GET ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      category: {
        categoryTypeId: 0,
        icon: 'cat',
        id: 2,
        name: 'C.A.T.',
        userId: 0
      }
    };
  },
  [`POST ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
    const { icon, name, categoryTypeId } = params.category;

    return {
      category: {
        id: 10001,
        icon,
        name,
        categoryTypeId
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
        categoryTypeId
      }
    };
  },
  [`DELETE ${API_URL}/categories/{id}`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
