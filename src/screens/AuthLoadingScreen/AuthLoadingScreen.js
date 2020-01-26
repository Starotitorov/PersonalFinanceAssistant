import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import { colors } from 'src/styles';

const SPINNER_SIZE = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function AuthLoadingScreen() {
  return (
    <View style={ styles.container }>
      <Spinner
        color={ colors.COLOR_PRIMARY }
        size={ SPINNER_SIZE }
        type="Circle" />
    </View>
  );
}
