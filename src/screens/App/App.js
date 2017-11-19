import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { PlatformKeyboardAvoidingView } from 'src/components';
import AppNavigator from '../AppNavigator';
import styles from './AppStyles';

export default function App({ dispatch, navigationState }) {
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
