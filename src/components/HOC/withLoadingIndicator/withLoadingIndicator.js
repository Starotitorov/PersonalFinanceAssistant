import React from 'react';
import { View } from 'react-native';
import { colors } from 'src/styles';
import Spinner from 'react-native-spinkit';
import styles from './WrapperStyles';

export default function withLoadingIndicator(WrappedComponent, size = 40) {
  return function Wrapper({ isLoading, ...rest }) {
    if (isLoading) {
      return (
        <View style={ styles.container }>
          <Spinner
            color={ colors.COLOR_PRIMARY }
            size={ size }
            type="Circle" />
        </View>
      );
    }

    return (
      <WrappedComponent { ...rest } />
    );
  };
}
