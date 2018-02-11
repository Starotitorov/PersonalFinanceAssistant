import React from 'react';
import { TransactionForm } from 'src/components';
import { View, StyleSheet } from 'react-native';

export default function AddTransactionScreen({ addTransaction, options }) {
    return (
        <View style={styles.container}>
            <TransactionForm
                onSubmit={addTransaction}
                options={options}
                createTransaction
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 300
    }
});
