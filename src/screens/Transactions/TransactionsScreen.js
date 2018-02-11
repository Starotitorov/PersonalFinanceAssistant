import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';
import TransactionsPeriodCarousel from './components/TransactionsPeriodCarousel';
import TransactionsList from './components/TransactionsList';
import TransactionsPieChart from './components/TransactionsPieChart';
import { LIST, CHART } from 'src/constants/transactionsViewTypes';

export default class TransactionsScreen extends Component {
    renderViewInner() {
        const {
            viewType,
            refreshTransactionsListData,
            refreshing,
            selectTransaction
        } = this.props;

        switch (viewType) {
            case LIST:
                return (
                    <TransactionsList
                        refreshing={refreshing}
                        onRefresh={refreshTransactionsListData}
                        onSelectTransaction={selectTransaction} />
                );
            case CHART:
                return (
                    <TransactionsPieChart
                        refreshing={refreshing}
                        onRefresh={refreshTransactionsListData}
                    />
                );
            default:
                console.log('Not implemented transactions view type');
                return;
        }
    }

    render() {
        const {
            currentDate,
            changeDateForward,
            changeDateBack,
            addTransaction,
        } = this.props;

        return (
            <View style={styles.container}>
                <TransactionsPeriodCarousel
                    currentDate={currentDate}
                    onPressBack={changeDateBack}
                    onPressForward={changeDateForward}
                />
                { this.renderViewInner() }
                <ActionButton.Button
                    type={ActionButton.types.ADD}
                    onPress={addTransaction}
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
