/*
 * validators.js
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

import { createValidator } from 'revalidate';

/*eslint-disable */
const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/;
const CURRENCY_REGEXP = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
/* eslint-enable */

export const password = createValidator(
  message => value => {
    if (value && value.trim()) {
      return !PASSWORD_REGEXP.test(value) ? message : undefined;
    }
  },
  field => `The ${field} is invalid`
);

export const email = createValidator(
  message => value => {
    if (value && value.trim()) {
      return !EMAIL_REGEXP.test(value) ? message : undefined;
    }
  },
  field => `The ${field} is invalid`
);

export const range = (min = -Infinity, max = Infinity) => createValidator(
  message => value => {
    const number = Number(value);

    if (number) {
      return number <= min || number >= max ? message : undefined;
    }
  },
  field => `The ${field} is invalid`
);

export const required = createValidator(
  message => value => !value ? message : undefined,
  field => `The ${field} is required`
);

export const number = createValidator(
  message => value => {
    if (value) {
      return isNaN(parseFloat(value)) || !isFinite(value) ? message : undefined;
    }
  },
  field => `The ${field} is not a valid number`
);

export const currency = createValidator(
  message => value => {
    if (value) {
      return !CURRENCY_REGEXP.test(value) ? message : undefined;
    }
  },
  field => `The ${field} is not a valid sum of money`
);

export const match = otherField => createValidator(
  message => (value, values) => value && value !== values[otherField] ? message : undefined,
  field => `The ${field} should match ${otherField}`
);
