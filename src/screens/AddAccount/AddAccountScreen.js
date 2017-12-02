import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddAccountForm from './components/AddAccountForm';

export default function AddAccountScreen({ onAddAccount }) {
    return (
        <View style={styles.container}>
            <AddAccountForm onSubmit={onAddAccount} />
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
