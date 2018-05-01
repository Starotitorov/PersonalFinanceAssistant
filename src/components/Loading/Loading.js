import React from 'react';
import { View } from 'react-native';
import { colors } from 'src/styles';
import Spinner from 'react-native-spinkit';
import styles from './LoadingStyles';

const Loading = ({ size }) =>
  <View style={ styles.container }>
    <Spinner
      color={ colors.COLOR_PRIMARY }
      size={ size }
      type="Circle" />
  </View>;

export default Loading;
