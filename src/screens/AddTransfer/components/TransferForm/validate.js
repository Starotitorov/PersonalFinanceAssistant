/*
 * validate.js
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

import { composeValidators, combineValidators } from 'revalidate';
import { required, currency, number } from '../../../../utils/validators';
import {
  TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD,
  TRANSFER_FORM_TO_ACCOUNT_ID_FIELD,
  TRANSFER_FORM_VALUE_FIELD,
  TRANSFER_FORM_EXCHANGE_RATE_FIELD,
  TRANSFER_FORM_DATE_FIELD
} from './constants';

export default combineValidators({
  [TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD]: required('from account'),
  [TRANSFER_FORM_TO_ACCOUNT_ID_FIELD]: required('to account'),
  [TRANSFER_FORM_VALUE_FIELD]: composeValidators(required, currency)('sum'),
  [TRANSFER_FORM_EXCHANGE_RATE_FIELD]: number('exchange rate'),
  [TRANSFER_FORM_DATE_FIELD]: required('date')
});
