/*
 * networkService.js
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

// import FetchMock from 'react-native-fetch-mock';
import { fetch, cancelableFetch } from 'src/utils';

// Mock api
// global.fetch = new FetchMock(require('../../mocks')).fetch;

const parseResponse = async (url, response = {}) => {
  let data = {};
  try {
    data = await response.json();
  } catch (e) {}

  return data;
};

const request = async (method, url, headers = {}, body, params) =>
  fetch(url, { method, headers, body, params })
    .then(response => parseResponse(url, response));

export const get = (url, headers, params) => request('GET', url, headers, undefined, params);

export const createOnceRequest = func => {
  let req = null;

  return (...args) => {
    if (req) {
      req.cancel();
    }

    req = cancelableFetch(func(...args));

    req
      .then(res => {
        req = null;

        return res;
      });

    return req;
  };
};

export const post = (url, headers, body) => request('POST', url, headers, body);

export const put = (url, headers, body) => request('PUT', url, headers, body);

export const del = (url, headers) => request('DELETE', url, headers);
