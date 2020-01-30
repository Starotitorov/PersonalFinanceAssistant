/*
 * TransferForm.js
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
import {
  TextInputField as TextInput,
  SelectInputField as SelectInput,
  DatePickerField,
  ActionButton,
  Field,
  CalculatorInputField
} from 'src/components';
import styles from './TransferFormStyles';
import { normalizeDate, formatDate } from 'src/utils';
import { Card } from 'src/components';

const TransferForm = ({
  isSameCurrency,
  handleSubmit,
  viewModel,
  invalid,
  submitting
}) =>
  <View style={ styles.container }>
    <Card>
      <Field
        { ...viewModel.value }
        component={ CalculatorInputField } />
      <Field
        { ...viewModel.fromAccountId }
        component={ SelectInput } />
      <Field
        { ...viewModel.toAccountId }
        component={ SelectInput } />
      {
        !isSameCurrency &&
        <Field
          { ...viewModel.exchangeRate }
          component={ TextInput } />
      }
      <Field
        { ...viewModel.date }
        format={ formatDate }
        normalize={ normalizeDate }
        component={ DatePickerField } />
      <Field
        { ...viewModel.note }
        component={ TextInput } />
    </Card>
    <ActionButton.Button
      disabled={ invalid || submitting }
      type={ ActionButton.types.SAVE }
      onPress={ handleSubmit } />
  </View>;

TransferForm.propTypes = {
  isSameCurrency: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  viewModel: PropTypes.shape({})
};

export default TransferForm;

