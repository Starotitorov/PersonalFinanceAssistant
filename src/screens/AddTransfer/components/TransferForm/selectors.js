/*
 * selectors.js
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

import { find } from 'lodash';
import { getFormValues } from 'redux-form';
import { TRANSFER_FORM } from './constants';

export const getTransferFormValues = getFormValues(TRANSFER_FORM);

export const isSameCurrency = (state, fromAccountId, toAccountId) => {
  if (!fromAccountId || !toAccountId) {
    return true;
  }

  const { addTransfer: { accounts }} = state;

  const { currency: fromAccountCurrency } = find(accounts, { id: fromAccountId });
  const { currency: toAccountCurrency } = find(accounts, { id: toAccountId });

  return fromAccountCurrency === toAccountCurrency;
};
