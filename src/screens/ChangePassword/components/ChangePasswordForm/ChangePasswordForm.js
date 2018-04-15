import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField, PrimaryButton } from 'src/components';
import { CHANGE_PASSWORD_FORM } from 'src/constants/forms';
import validate from './validate';
import styles from './ChangePasswordFormStyles';

const ChangePasswordForm = ({ handleSubmit, submitting, invalid }) =>
  <View style={ styles.container }>
    <View style={ styles.fields }>
      <Field
        name="oldPassword"
        props={{
          secureTextEntry: true,
          label: 'Old password',
          placeholder: 'Enter old password...'
        }}
        component={ TextInputField } />
      <Field
        name="password"
        props={{
          secureTextEntry: true,
          label: 'New password',
          placeholder: 'Enter new password...'
        }}
        component={ TextInputField } />
      <Field
        name="passwordConfirmation"
        props={{
          secureTextEntry: true,
          label: 'New password confirmation',
          placeholder: 'Enter new password one more time...'
        }}
        component={ TextInputField } />
    </View>
    <PrimaryButton
      title="Change"
      disabled={ submitting || invalid }
      onPress={ handleSubmit } />
  </View>;

export default reduxForm({
  form: CHANGE_PASSWORD_FORM,
  validate
})(ChangePasswordForm);
