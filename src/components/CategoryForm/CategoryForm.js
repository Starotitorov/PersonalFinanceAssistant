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
