/*
 * getTransactionsList.js
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
import { chain, values } from 'lodash';
import * as categoryTypes from 'src/constants/categoryTypes';

const getTransactionsList = transactionsById =>
  chain(values(transactionsById))
    .map(transaction => ({
      ...transaction,
      date: moment(transaction.date),
      value: (transaction.categoryTypeId === categoryTypes.INCOME_CATEGORY ? 1 : -1) * transaction.value
    }))
    .value();

export default getTransactionsList;
