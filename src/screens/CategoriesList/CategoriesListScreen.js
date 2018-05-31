import React from 'react';
import { List } from 'react-native-elements';
import { FlatList, ScrollView, RefreshControl } from 'react-native';
import { colors } from 'src/styles';

const keyExtractor = item => item.id;

const CategoriesListScreen = ({
  data,
  renderItem,
  EmptyListComponent,
  refreshing,
  refreshCategoriesListData
}) =>
  <ScrollView
    refreshControl={
      <RefreshControl
        colors={ [colors.COLOR_PRIMARY] }
        refreshing={ refreshing }
        onRefresh={ refreshCategoriesListData } />
    }>
    <List>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ keyExtractor }
        ListEmptyComponent={ EmptyListComponent } />
    </List>
  </ScrollView>;

export default CategoriesListScreen;
