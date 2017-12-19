import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TransactionForm } from 'src/components';

export default function EditTransactionScreen({ onUpdateTransaction }) {
    return (
        <View style={styles.container}>
            <TransactionForm onSubmit={onUpdateTransaction} />
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
