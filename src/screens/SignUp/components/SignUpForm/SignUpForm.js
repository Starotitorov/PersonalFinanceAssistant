/*
 * SignUpForm.js
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
import { SIGN_UP_FORM } from 'src/constants/forms';
import styles from './SignUpFormStyles';

function SignUpForm({ handleSubmit, submitting, invalid }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.fields }>
        <Field
          name="name"
          props={{
            label: 'Name',
            placeholder: 'Enter name...'
          }}
          component={ TextInputField } />
        <Field
          name="email"
          props={{
            label: 'Email',
            placeholder: 'Enter email...'
          }}
          component={ TextInputField } />
        <Field
          name="password"
          props={{
            label: 'Password',
            secureTextEntry: true,
            placeholder: 'Enter password...'
          }}
          component={ TextInputField } />
        <Field
          name="password_confirmation"
          props={{
            secureTextEntry: true,
            label: 'Password confirmation',
            placeholder: 'Enter password one more time...'
          }}
          component={ TextInputField } />
      </View>
      <PrimaryButton
        title="Sign up"
        disabled={ submitting || invalid }
        onPress={ handleSubmit } />
    </View>
  );
}

export default reduxForm({
  form: SIGN_UP_FORM,
  validate
})(SignUpForm);
