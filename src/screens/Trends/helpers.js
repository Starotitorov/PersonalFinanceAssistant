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

import moment from 'moment';
import { DEFAULT_BASE_CURRENCY, OTHER_CURRENCIES } from 'src/constants/currency';

export const startOfMonth = (d = new Date()) => moment(d).startOf('month').toDate();

export const startOfNextMonth = (d = new Date()) =>
  startOfMonth(moment(d).add(1, 'months').toDate());

export const getTimeIntervals = (from, to, months = []) => {
  if (moment(from) <= moment(to)) {
    const startOfNext = startOfNextMonth(from);
    return getTimeIntervals(startOfNext, to, [...months, [from, startOfNext]]);
  }

  return months;
};

export const getRequestQueryParameter = () => OTHER_CURRENCIES.map(c => `${c}_${DEFAULT_BASE_CURRENCY}`).join(',');
