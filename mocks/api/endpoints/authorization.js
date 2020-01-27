/*
 * authorization.js
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

const CURRENT_USER_ID = 1;

export default {
  [`POST ${API_URL}/signin`]: ({ method, url, params, urlparams, headers }) => {
    return {
      user: {
        id: CURRENT_USER_ID,
        name: `Artem Starotitorov`,
        email: `starotitorov1997@gmail.com`
      },
      token: 'token'
    };
  },
  [`POST ${API_URL}/signup`]: ({ method, url, params, urlparams, headers }) => {
    return {
      user: {
        id: CURRENT_USER_ID,
        name: `Artem Starotitorov`,
        email: `starotitorov1997@gmail.com`
      },
      token: 'token'
    };
  },
  [`POST ${API_URL}/auth/facebook/callback`]: ({ method, url, params, urlparams, headers }) => {
    return {
      user: {
        id: CURRENT_USER_ID,
        name: `Artem Starotitorov`,
        email: `starotitorov1997@gmail.com`
      },
      token: 'token'
    };
  },
  [`PUT ${API_URL}/changePassword`]: ({ method, url, params, urlparams, headers }) => {
    return {
      status: 200
    };
  }
};
