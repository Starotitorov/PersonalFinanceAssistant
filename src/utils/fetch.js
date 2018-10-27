/*
 * fetch.js
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

function getQueryString(params) {
  return params ?
    `?${Object.keys(params)
      .reduce((acc, k) => {
        if (typeof params[k] === 'undefined') {
          return acc;
        }

        if (Array.isArray(params[k])) {
          return [...acc, params[k]
            .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
            .join('&')];
        }

        return [...acc, `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`];
      }, [])
      .join('&')}` :
    '';
}

export default (url, options = {}) => {
  const requesttUrl = url.concat(getQueryString(options.params));

  return fetch(requesttUrl, options)
    .then(response => (response.status >= 200 && response.status < 300) ?
      Promise.resolve(response) :
      Promise.reject(response));
};
