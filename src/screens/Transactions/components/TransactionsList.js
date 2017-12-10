import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { List } from 'react-native-elements';
import { withEmptyListComponent } from 'src/components';
import TransactionsListItem from './TransactionsListItem';

const keyExtractor = (item, index) => index;

class TransactionsList extends Component {
    renderItem({ item }) {
        return <TransactionsListItem data={item} />;
    }

    render() {
        return (
            <List>
                <FlatList
                    data={this.props.data}
                    keyExtractor={keyExtractor}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.props.EmptyListComponent}
                />
            </List>
        );
    }
}

export default withEmptyListComponent(TransactionsList, 'No transactions');
