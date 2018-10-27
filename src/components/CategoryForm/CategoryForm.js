/*
 * CategoryForm.js
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
import { Card } from 'react-native-elements';
import IconField from '../IconField';
import SelectInputField from '../SelectInputField';
import TextInputField from '../TextInputField';
import Field from '../FormField';
import ActionButton from '../ActionButton';
import styles from './CategoryFormStyles';

const CategoryForm = ({ handleSubmit, submitting, invalid, viewModel = {}, submitButtonText }) =>
  <View style={ styles.container }>
    <Card containerStyle={ styles.fields }>
      <View style={ styles.row }>
        <Field
          { ...viewModel.icon }
          style={ styles.icon }
          component={ IconField } />
        <View style={ styles.flexGrow }>
          <Field
            { ...viewModel.name }
            component={ TextInputField } />
        </View>
      </View>
      <Field
        { ...viewModel.categoryTypeId }
        component={ SelectInputField } />
    </Card>
    <ActionButton.Button
      disabled={ invalid || submitting }
      type={ ActionButton.types.SAVE }
      onPress={ handleSubmit } />
  </View>;

CategoryForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  viewModel: PropTypes.shape({}),
  submitButtonText: PropTypes.string
};

export default CategoryForm;
