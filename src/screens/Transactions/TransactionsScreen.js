import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';
import TransactionsList from './components/TransactionsList';
import TransactionsPieChart from './components/TransactionsPieChart';
import { LIST, CHART } from 'src/constants/transactionsViewTypes';

export default class TransactionsScreen extends Component {
    renderViewInner() {
        const { viewType, onRefresh, fetching, onSelectTransaction } = this.props;

        switch (viewType) {
            case LIST:
                return (
                    <TransactionsList fetching={fetching} onRefresh={onRefresh} onSelectTransaction={onSelectTransaction} />
                );
            case CHART:
                return (
                    <TransactionsPieChart fetching={fetching} onRefresh={onRefresh} />
                );
            default:
                console.log('Not implemented transactions view type');
                return;
        }
    }

    render() {
        const {
            currentDate,
            onChangeCurrentDateForward,
            onChangeCurrentDateBack,
            onAddTransaction,
        } = this.props;

        return (
            <View style={styles.container}>
                <TransactionsPeriodCarousel
                    currentDate={currentDate}
                    onPressBack={onChangeCurrentDateBack}
                    onPressForward={onChangeCurrentDateForward}
                />
                { this.renderViewInner() }
                <ActionButton.Button
                    type={ActionButton.types.ADD}
                    onPress={onAddTransaction}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
