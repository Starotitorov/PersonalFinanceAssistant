/*
 * rootReducer.js
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

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';
import accountsList from 'src/screens/AccountsList/reducer';
import editAccount from 'src/screens/EditAccount/reducer';
import network from 'src/components/HOC/withNetwork/reducer';
import categoriesList from 'src/screens/CategoriesList/reducer';
import editCategory from 'src/screens/EditCategory/reducer';
import addTransfer from 'src/screens/AddTransfer/reducer';
import transactionsList from 'src/screens/Transactions/reducer';
import addTransaction from 'src/screens/AddTransaction/reducer';
import editTransaction from 'src/screens/EditTransaction/reducer';
import trends from 'src/screens/Trends/reducer';
import currency from 'src/screens/Currency/reducer';
import authorization from 'src/screens/LogIn/reducer';

export default combineReducers({
  network,
  form,
  authorization,
  accountsList,
  categoriesList,
  editAccount,
  editCategory,
  addTransfer,
  transactionsList,
  addTransaction,
  editTransaction,
  trends,
  currency,
  modal
});
