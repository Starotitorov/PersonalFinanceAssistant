import React from 'react';
import PropTypes from 'prop-types';
import { TransactionForm } from 'src/components';
import { View } from 'react-native';
import styles from './AddTransactionScreenStyles';

const AddTransactionScreen = ({ addTransaction, viewModel }) =>
  <View style={ styles.container }>
    <TransactionForm
      submitButtonText="Add transaction"
      viewModel={ viewModel }
      onSubmit={ addTransaction } />
  </View>;

AddTransactionScreen.propTypes = {
  addTransaction: PropTypes.func,
  viewModel: PropTypes.shape({})
};

export default AddTransactionScreen;
