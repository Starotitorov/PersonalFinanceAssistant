import React, { Component } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import { withEmptyListComponent } from 'src/components';
import { colors } from 'src/styles/index';
import TransactionsListItem from '../TransactionsListItem/index';

const keyExtractor = (item, index) => index;

class TransactionsList extends Component {
    renderItem=({ item })=> {
        return <TransactionsListItem data={item} onSelectTransaction={this.props.onSelectTransaction} />;
    };

    render() {
        const { fetching, onRefresh, onSelectTransaction } = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={fetching}
                            colors={[colors.COLOR_PRIMARY]}
                            onRefresh={onRefresh}
                        />
                    }
                    data={this.props.data}
                    keyExtractor={keyExtractor}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.props.EmptyListComponent}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
});

export default withEmptyListComponent(TransactionsList, 'No transactions');
