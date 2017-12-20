import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TransactionForm } from 'src/components';

export default function EditTransactionScreen({ initialValues, onUpdateTransaction }) {
    debugger;
    return (
        <View style={styles.container}>
            <TransactionForm
                enableReinitialize
                initialValues={initialValues}
                onSubmit={onUpdateTransaction}
            />
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
