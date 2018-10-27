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

import { sum } from 'lodash';

export const getData = data => data.intervals.map((value, index) => ({
  label: value,
  income: data.income[index].toFixed(2),
  outcome: data.outcome[index].toFixed(2)
}));

export const getAverageData = data => ({
  averageIncome: data.intervals.length > 0 ? (sum(data.income) / data.intervals.length).toFixed(2) : '0.00',
  averageOutcome: data.intervals.length > 0 ? (sum(data.outcome) / data.intervals.length).toFixed(2) : '0.00'
});
