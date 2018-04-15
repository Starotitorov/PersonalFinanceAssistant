import React from 'react';
import { View } from 'react-native';
import ChangePasswordForm from './components/ChangePasswordForm';
import styles from './ChangePasswordScreenStyles';

const ChangePasswordScreen = ({ changePassword }) =>
  <View style={ styles.container }>
    <ChangePasswordForm onSubmit={ changePassword } />
  </View>;

export default ChangePasswordScreen;
