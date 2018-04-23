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
