/*
 * cancelableFetch.js
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

class RequestCancellationError extends Error {
  constructor() {
    super();
    this.message = 'Request cancellation.';
  }
}

const cancelableFetch = promise => {
  let canceled = false;

  const result = new Promise((resolve, reject) => {
    promise.then(res => {
      if (canceled) {
        if (res.body && res.body.cancel) {
          res.body.cancel();
        }

        reject(new RequestCancellationError());
      } else {
        resolve(res);
      }
    });
  });

  result.cancel = () => { canceled = true; };

  return result;
};

export default cancelableFetch;
