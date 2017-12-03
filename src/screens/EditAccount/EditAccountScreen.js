import React from 'react';
import { StyleSheet, View } from 'react-native';
import EditAccountForm from './components/EditAccountForm';

export default function EditAccountScreen({ initialValues, onUpdateAccount }) {
    return (
        <View style={styles.container}>
            <EditAccountForm onSubmit={onUpdateAccount} initialValues={initialValues} />
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
