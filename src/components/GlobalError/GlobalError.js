import React from 'react';
import { Text } from 'react-native';
import styles from './GlobalErrorStyles';

const GlobalError = ({ message, style }) => <Text style={ [styles.error, style] }>{message}</Text>;

export default GlobalError;
