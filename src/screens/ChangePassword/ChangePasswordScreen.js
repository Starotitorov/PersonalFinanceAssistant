import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChangePasswordForm from './components/ChangePasswordForm';

export default function ChangePasswordScreen({ onSubmit }) {
    return (
        <View style={styles.container}>
            <ChangePasswordForm onSubmit={onSubmit} />
        </View>
    );
}

ChangePasswordScreen.defaultProps = {
    onSubmit: () => {}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
