import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionsHeader from '../TransactionsHeader';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';

export default function TransactionsScreen({
    currentDate,
    onChangeCurrentDateForward,
    onChangeCurrentDateBack
}) {
    return (
        <View style={styles.container}>
            <TransactionsHeader />
            <TransactionsPeriodCarousel
                currentDate={currentDate}
                onPressBack={onChangeCurrentDateBack}
                onPressForward={onChangeCurrentDateForward}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});