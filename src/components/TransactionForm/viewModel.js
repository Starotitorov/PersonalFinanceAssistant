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
  TRANSACTION_FORM_ACCOUNT_ID_FIELD,
  TRANSACTION_FORM_CATEGORY_ID_FIELD,
  TRANSACTION_FORM_DATE_FIELD,
  TRANSACTION_FORM_NOTE_FIELD,
  TRANSACTION_FORM_VALUE_FIELD
} from './constants';

export const createAddTransactionViewModel = ({ accounts = [], categories = []} = {}) => ({
  value: {
    name: TRANSACTION_FORM_VALUE_FIELD,
    label: 'Sum',
    placeholder: 'Enter sum...',
    keyboardType: 'numeric'
  },
  accountId: {
    name: TRANSACTION_FORM_ACCOUNT_ID_FIELD,
    label: 'Account',
    options: accounts
  },
  categoryId: {
    name: TRANSACTION_FORM_CATEGORY_ID_FIELD,
    label: 'Category',
    options: categories
  },
  date: {
    name: TRANSACTION_FORM_DATE_FIELD,
    label: 'Date'
  },
  note: {
    name: TRANSACTION_FORM_NOTE_FIELD,
    label: 'Note',
    placeholder: 'Enter note...'
  }
});

export const createEditTransactionViewModel = () => ({
  value: {
    name: TRANSACTION_FORM_VALUE_FIELD,
    label: 'Sum',
    placeholder: 'Enter sum...',
    keyboardType: 'numeric'
  },
  date: {
    name: TRANSACTION_FORM_DATE_FIELD,
    label: 'Date'
  },
  note: {
    name: TRANSACTION_FORM_NOTE_FIELD,
    label: 'Note',
    placeholder: 'Enter note...'
  }
});
