/*
 * EditTransactionScreen.js
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

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TransactionForm } from 'src/components';
import styles from './EditTransactionScreenStyles';

const EditTransactionScreen = ({ initialValues, updateTransaction, viewModel }) =>
  <View style={ styles.container }>
    <TransactionForm
      submitButtonText="Save changes"
      enableReinitialize
      viewModel={ viewModel }
      initialValues={ initialValues }
      onSubmit={ updateTransaction } />
  </View>;

EditTransactionScreen.propTypes = {
  initialValues: PropTypes.shape({}),
  updateTransaction: PropTypes.func,
  viewModel: PropTypes.shape({})
};

export default EditTransactionScreen;
