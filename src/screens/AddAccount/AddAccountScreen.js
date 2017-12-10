import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AccountForm } from 'src/components';

export default function AddAccountScreen({ onAddAccount }) {
    return (
        <View style={styles.container}>
            <AccountForm onSubmit={onAddAccount} createAccount />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
