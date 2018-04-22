import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert';
import { PlatformKeyboardAvoidingView } from 'src/components';
import AppNavigator from '../AppNavigator';
import styles from './AppStyles';
import { colors } from 'src/styles'

const App = ({ navigation, isConnected }) =>
  <PlatformKeyboardAvoidingView style={ styles.container }>
    <StatusBar backgroundColor={ colors.COLOR_PRIMARY } />
    <StatusBarAlert
      visible={ !isConnected }
      message="You are not connected to the internet"
      backgroundColor="#ff0000"
      color="white" />
    <AppNavigator navigation={ navigation } />
  </PlatformKeyboardAvoidingView>;

App.propTypes = {
  navigation: PropTypes.shape({})
};

export default App;
