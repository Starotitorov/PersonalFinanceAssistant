import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { withEmptyListComponent } from 'src/components';
import TransactionsListItem from './TransactionsListItem';

const keyExtractor = item => item;

class TransactionsList extends Component {
    renderItem({ item }) {
        return <TransactionsListItem data={item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={keyExtractor}
                renderItem={this.renderItem}
                ListEmptyComponent={this.props.EmptyListComponent}
            />
        );
    }
}

export default withEmptyListComponent(TransactionsList, 'No transactions');
