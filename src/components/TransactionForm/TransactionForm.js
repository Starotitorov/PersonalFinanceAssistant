import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import DatePickerField from '../DatePickerField';
import ActionButton from '../ActionButton';
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
  <View style={ styles.container }>
    <Card containerStyle={ styles.fields }>
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
    </Card>
    <ActionButton.Button
      disabled={ invalid || submitting }
      type={ ActionButton.types.SAVE }
      onPress={ handleSubmit } />
  </View>;

TransactionForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  viewModel: PropTypes.shape({}),
  submitButtonText: PropTypes.string
};

export default TransactionForm;
