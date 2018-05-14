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
      title="Log in"
      disabled={ submitting || invalid }
      onPress={ handleSubmit } />
  </View>;

export default reduxForm({
  form: LOG_IN_FORM,
  validate
})(LogInForm);
