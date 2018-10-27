/*
 * viewModel.js
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

import {
  ACCOUNT_FORM_ICON_FIELD,
  ACCOUNT_FORM_BALANCE_FIELD,
  ACCOUNT_FORM_INITIAL_DATE_FIELD,
  ACCOUNT_FORM_NAME_FIELD,
  ACCOUNT_FORM_CURRENCY_FIELD
} from './constants';
import currencies from 'src/constants/currency';

export const createAddAccountViewModel = () => ({
  icon: {
    name: ACCOUNT_FORM_ICON_FIELD
  },
  name: {
    name: ACCOUNT_FORM_NAME_FIELD,
    label: 'Account name',
    placeholder: 'Enter account name...'
  },
  balance: {
    name: ACCOUNT_FORM_BALANCE_FIELD,
    label: 'Initial balance',
    placeholder: 'Enter initial balance...',
    keyboardType: 'numeric'
  },
  initialDate: {
    name: ACCOUNT_FORM_INITIAL_DATE_FIELD,
    label: 'Initial date',
    placeholder: 'Enter initial date...'
  },
  currency: {
    name: ACCOUNT_FORM_CURRENCY_FIELD,
    label: 'Currency',
    placeholder: 'Choose currency...',
    options: currencies
  }
});

export const createEditAccountViewModel = () => ({
  icon: {
    name: ACCOUNT_FORM_ICON_FIELD
  },
  name: {
    name: ACCOUNT_FORM_NAME_FIELD,
    label: 'Account name',
    placeholder: 'Enter account name...'
  },
  initialDate: {
    name: ACCOUNT_FORM_INITIAL_DATE_FIELD,
    label: 'Initial date',
    placeholder: 'Enter initial date...'
  }
});
