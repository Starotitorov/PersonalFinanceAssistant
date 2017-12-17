import React, { Component } from 'react';
import { List } from 'react-native-elements';
import { RefreshControl, FlatList } from 'react-native';
import { colors } from 'src/styles';
import { withEmptyListComponent } from 'src/components';
import AccountListItem from './AccountListItem'

class AccountsList extends Component {
    keyExtractor = ({ id }) => id;

    renderItem = ({ item }) => {
        const { onSelectAccount } = this.props;

        return (
            <AccountListItem
                account={item}
                onSelectAccount={onSelectAccount}
            />
        );
    };

    render() {
        const { isLoading, onRefresh, accounts } = this.props;

        return (
            <List>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            colors={[colors.COLOR_PRIMARY]}
                            onRefresh={onRefresh}
                        />
                    }
                    data={accounts}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.props.EmptyListComponent}
                />
            </List>
        );
    }
}

export default withEmptyListComponent(AccountsList, 'No accounts')
