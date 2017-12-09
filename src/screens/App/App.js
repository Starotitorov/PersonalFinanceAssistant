import React from 'react';
import { compose } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import {
    PlatformKeyboardAvoidingView,
    withLoadingIndicator,
    withNetwork
} from 'src/components';
import AppNavigator from '../AppNavigator';
import StatusBarAlert from 'react-native-statusbar-alert';
import styles from './AppStyles';

function App({ dispatch, navigationState, isConnected }) {
    return (
        <PlatformKeyboardAvoidingView style={styles.container}>
            <StatusBarAlert
                visible={!isConnected}
                message="You are not connected to the internet"
                backgroundColor="#ff0000"
                color="white"
            />
            <AppNavigator navigation={addNavigationHelpers({
                dispatch,
                state: navigationState
            })}
            />
        </PlatformKeyboardAvoidingView>
    );
}

export default compose(
    withNetwork,
    withLoadingIndicator
)(App);
