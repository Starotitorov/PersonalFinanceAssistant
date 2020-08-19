/*
 * currency.js
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

export const BYN = 'BYN';
export const USD = 'USD';
export const EUR = 'EUR';

export default [
  {
    label: 'Belarusian Ruble (BYN)',
    value: BYN
  },
  {
    label: 'US Dollar (USD)',
    value: USD
  },
  {
    label: 'Euro (EUR)',
    value: EUR
  }
];

export const DEFAULT_BASE_CURRENCY = BYN;
export const OTHER_CURRENCIES = [USD, EUR];
export const ALL_CURRENCIES = [BYN, EUR, USD];
