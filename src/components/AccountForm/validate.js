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
import { required, currency, range } from '../../utils/validators';
import {
  ACCOUNT_FORM_BALANCE_FIELD,
  ACCOUNT_FORM_NAME_FIELD,
  ACCOUNT_FORM_INITIAL_DATE_FIELD
} from './constants';

export default combineValidators({
  [ACCOUNT_FORM_NAME_FIELD]: required('name'),
  [ACCOUNT_FORM_BALANCE_FIELD]: composeValidators(required, currency, range(0))('balance'),
  [ACCOUNT_FORM_INITIAL_DATE_FIELD]: required('initial date')
});
