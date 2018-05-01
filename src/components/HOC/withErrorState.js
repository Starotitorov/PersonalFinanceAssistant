import React from 'react';
import { branch, renderComponent } from 'recompose';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  },
  container: {
    marginVertical: 20
  }
});

const ErrorMessage = () =>
  <View style={ styles.container }>
    <Text style={ styles.text }>
      The error occurred! Try again later.
    </Text>
  </View>;

const withErrorState = branch(
  ({ isError }) => isError,
  renderComponent(ErrorMessage)
);

export default withErrorState;
