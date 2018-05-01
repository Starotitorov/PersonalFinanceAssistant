import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import Toast from 'react-native-easy-toast';
import { MenuContext } from 'react-native-popup-menu';
import { PlatformKeyboardAvoidingView } from 'src/components';
import HomeDrawerNavigator from '../AppNavigator';
import styles from './AppStyles';
import { colors } from 'src/styles';

const App = ({ navigation, setToastRef }) =>
  <PlatformKeyboardAvoidingView style={ styles.container }>
    <MenuContext>
      <StatusBar backgroundColor={ colors.COLOR_PRIMARY } barStyle="light-content" />
      <HomeDrawerNavigator navigation={ navigation } />
      <Toast ref={ element => setToastRef(element) } position="top" positionValue={ 10 } defaultCloseDelay={ 5000 } />
    </MenuContext>
  </PlatformKeyboardAvoidingView>;

App.propTypes = {
  navigation: PropTypes.shape({})
};

export default App;
