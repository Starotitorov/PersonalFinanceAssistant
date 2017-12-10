import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AccountForm } from 'src/components';

export default function EditAccountScreen({ initialValues, onUpdateAccount }) {
    return (
        <View style={styles.container}>
            <AccountForm onSubmit={onUpdateAccount} initialValues={initialValues} />
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
