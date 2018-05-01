import React, { Component } from 'react';
import { List } from 'react-native-elements';
import { FlatList } from 'react-native';
import { withEmptyListComponent } from 'src/components';
import AccountListItem from '../AccountListItem';

class AccountsList extends Component {
    keyExtractor = ({ id }) => id;

    renderItem = ({ item }) => {
      const { onSelectAccount } = this.props;

      return (
        <AccountListItem
          account={ item }
          onSelectAccount={ onSelectAccount } />
      );
    };

    render() {
      const { accounts } = this.props;

      return (
        <List>
          <FlatList
            data={ accounts }
            keyExtractor={ this.keyExtractor }
            renderItem={ this.renderItem }
            ListEmptyComponent={ this.props.EmptyListComponent } />
        </List>
      );
    }
}

export default withEmptyListComponent(AccountsList, 'No accounts');
