import React from 'react';
import { View } from 'react-native';
import { AccountForm } from 'src/components';
import styles from './EditAccountScreenStyles';

const EditAccountScreen = ({ initialValues, updateAccount, viewModel }) =>
  <View style={ styles.container }>
    <AccountForm
      enableReinitialize
      viewModel={ viewModel }
      initialValues={ initialValues }
      submitButtonText="Save changes"
      onSubmit={ updateAccount } />
  </View>;

export default EditAccountScreen;
