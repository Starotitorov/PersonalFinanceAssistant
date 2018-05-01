import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TransactionForm } from 'src/components';
import styles from './EditTransactionScreenStyles';

const EditTransactionScreen = ({ initialValues, updateTransaction, viewModel }) =>
  <View style={ styles.container }>
    <TransactionForm
      submitButtonText="Save changes"
      enableReinitialize
      viewModel={ viewModel }
      initialValues={ initialValues }
      onSubmit={ updateTransaction } />
  </View>;

EditTransactionScreen.propTypes = {
  initialValues: PropTypes.shape({}),
  updateTransaction: PropTypes.func,
  viewModel: PropTypes.shape({})
};

export default EditTransactionScreen;
