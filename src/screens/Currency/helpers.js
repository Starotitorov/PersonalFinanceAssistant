/*
 * helpers.js
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

import { get } from 'lodash';
import { ALL_CURRENCIES } from 'src/constants/currency';

export const getCurrencyLine = (values, key) => {
  const [from, to] = key.split('_');
  return `1 ${from} -> ${get(values, `${key}.val`, 1)} ${to}`;
};

export const getRequestQueryParameter = () => ALL_CURRENCIES
  .reduce((acc, fromCurrency) => [
    ...acc,
    ...ALL_CURRENCIES.filter(c => c !== fromCurrency).map(c => `${fromCurrency}_${c}`)
  ], [])
  .join(',');
