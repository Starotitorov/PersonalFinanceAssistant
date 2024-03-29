/*
 * LogInForm.js
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
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField, PrimaryButton } from 'src/components';
import validate from './validate';
import { LOG_IN_FORM } from 'src/constants/forms';
import styles from './LogInFormStyles';

const LogInForm = ({ handleSubmit, submitting, error, invalid }) =>
  <View style={ styles.container }>
    <View style={ styles.fields }>
      <Field
        name="email"
        keyboardType="email-address"
        props={{
          label: 'Email',
          placeholder: 'Enter email...'
        }}
        component={ TextInputField } />
      <Field
        name="password"
        props={{
          secureTextEntry: true,
          label: 'Password',
          placeholder: 'Enter password...'
        }}
        component={ TextInputField } />
    </View>
    <PrimaryButton
      title="Sign in"
      disabled={ submitting || invalid }
      onPress={ handleSubmit } />
  </View>;

export default reduxForm({
  form: LOG_IN_FORM,
  validate
})(LogInForm);
