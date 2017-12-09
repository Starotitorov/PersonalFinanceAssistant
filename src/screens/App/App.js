import React from 'react';
import { compose } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import {
    PlatformKeyboardAvoidingView,
    withLoadingIndicator,
    withNetwork
} from 'src/components';
import AppNavigator from '../AppNavigator';
import styles from './AppStyles';

function App({ dispatch, navigationState }) {
    return (
        <PlatformKeyboardAvoidingView style={styles.container}>
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
