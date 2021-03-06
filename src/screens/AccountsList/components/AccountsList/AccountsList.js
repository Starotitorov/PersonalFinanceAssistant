/*
 * AccountsList.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

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
