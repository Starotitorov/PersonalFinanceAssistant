import React from 'react';
import PropTypes from 'prop-types'
import { PlatformKeyboardAvoidingView } from 'src/components';
import AppNavigator from '../AppNavigator';
import StatusBarAlert from 'react-native-statusbar-alert';
import styles from './AppStyles';

const App = ({ navigation, isConnected }) =>
    <PlatformKeyboardAvoidingView style={styles.container}>
        <StatusBarAlert
            visible={!isConnected}
            message="You are not connected to the internet"
            backgroundColor="#ff0000"
            color="white" />
        <AppNavigator navigation={navigation} />
    </PlatformKeyboardAvoidingView>

App.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.shape({})
};

export default App;
