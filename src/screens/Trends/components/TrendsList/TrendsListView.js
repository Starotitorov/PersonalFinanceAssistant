/*
 * TrendsListView.js
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
import { FlatList } from 'react-native';
import TrendsListItem from './components/TrendsListItem/TrendsListItem';
import { withProps, compose, withHandlers } from 'recompose';
import { getData, getAverageData } from './helpers';

const withListData = withProps(({ data }) => ({
  data: getData(data),
  average: getAverageData(data)
}));

const withTrendItem = withHandlers({
  renderItem: () => ({ item: { income, outcome, label }}) =>
    <TrendsListItem
      label={ label }
      income={ income }
      expense={ outcome } />
});

const withFooter = withProps(({ average: { averageIncome, averageOutcome }}) => ({
  ListFooterComponent: () =>
    <TrendsListItem
      label="Average, per month"
      labelBold
      bordered={ false }
      income={ averageIncome }
      expense={ averageOutcome } />
}));

export default compose(
  withListData,
  withTrendItem,
  withFooter
)(FlatList);
