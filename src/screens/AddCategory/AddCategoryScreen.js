import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './AddCategoryScreenStyles';

const AddCategoryScreen = ({ handleAddCategory, viewModel, initialValues }) =>
  <View style={ styles.container }>
    <CategoryForm
      submitButtonText="Add category"
      viewModel={ viewModel }
      initialValues={ initialValues }
      onSubmit={ handleAddCategory } />
  </View>;

AddCategoryScreen.propTypes = {
  handleAddCategory: PropTypes.func,
  viewModel: PropTypes.shape({}),
  initialValues: PropTypes.shape({})
};

export default AddCategoryScreen;
