/*
 * TransactionsList.js
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

import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView, RefreshControl } from 'react-native';
import styles from './TransactionsListStyles';
import { colors } from 'src/styles';

const keyExtractor = ({ id }) => id;

const TransactionsList = ({ data, EmptyListComponent, renderItem, refreshing, onRefresh }) =>
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={ refreshing }
        colors={ [colors.COLOR_PRIMARY] }
        onRefresh={ onRefresh } />
    }
    contentContainerStyle={ styles.container }>
    <FlatList
      data={ data }
      keyExtractor={ keyExtractor }
      renderItem={ renderItem }
      ListEmptyComponent={ EmptyListComponent } />
  </ScrollView>;

TransactionsList.propTypes = {
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  EmptyListComponent: PropTypes.shape({}),
  renderItem: PropTypes.func
};

export default TransactionsList;
