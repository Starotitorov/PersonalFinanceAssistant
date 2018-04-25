import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import DatePickerField from '../DatePickerField';
import PrimaryButton from '../PrimaryButton';
import CalculatorInputField from '../CalculatorInputField';
import Field from '../FormField';
import { normalizeDate, formatDate } from 'src/utils';
import styles from './TransactionFormStyles';

const TransactionForm = ({
  handleSubmit,
  submitting,
  invalid,
  viewModel = {},
  submitButtonText
}) =>
  <ScrollView contentContainerStyle={ styles.container }>
    <View style={ styles.fields }>
      <Field
        { ...viewModel.value }
        component={ CalculatorInputField } />
      <Field
        { ...viewModel.accountId }
        component={ SelectInput } />
      <Field
        { ...viewModel.categoryId }
        component={ SelectInput } />
      <Field
        { ...viewModel.date }
        format={ formatDate }
        normalize={ normalizeDate }
        component={ DatePickerField } />
      <Field
        { ...viewModel.note }
        component={ TextInput } />
    </View>
    <PrimaryButton
      disabled={ invalid || submitting }
      title={ submitButtonText }
      onPress={ handleSubmit } />
  </ScrollView>;

TransactionForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  viewModel: PropTypes.shape({}),
  submitButtonText: PropTypes.string
};

export default TransactionForm;
