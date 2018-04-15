import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { PrimaryButton, IconField, SelectInputField, TextInputField, Field } from 'src/components';
import styles from './CategoryFormStyles';

const CategoryForm = ({ handleSubmit, submitting, invalid, viewModel = {}, submitButtonText }) =>
  <ScrollView contentContainerStyle={ styles.container }>
    <View style={ styles.fields }>
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
    </View>
    <PrimaryButton
      disabled={ invalid || submitting }
      title={ submitButtonText }
      onPress={ handleSubmit } />
  </ScrollView>;

CategoryForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  viewModel: PropTypes.shape({}),
  submitButtonText: PropTypes.string
};

export default CategoryForm;
