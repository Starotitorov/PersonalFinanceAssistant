import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
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

const TransferForm = ({
  isSameCurrency,
  handleSubmit,
  viewModel,
  invalid,
  submitting
}) =>
  <View style={ styles.container }>
    <Card containerStyle={ styles.fields }>
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

