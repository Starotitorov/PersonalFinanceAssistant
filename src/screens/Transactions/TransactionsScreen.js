import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';
import TransactionsList from './components/TransactionsList';

export default function TransactionsScreen({
    currentDate,
    data,
    onChangeCurrentDateForward,
    onChangeCurrentDateBack,
    onAddTransaction
}) {
    return (
        <View style={styles.container}>
            <TransactionsPeriodCarousel
                currentDate={currentDate}
                onPressBack={onChangeCurrentDateBack}
                onPressForward={onChangeCurrentDateForward}
            />
            <TransactionsList data={data} />
            <ActionButton.Button
                type={ActionButton.types.ADD}
                onPress={onAddTransaction}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
