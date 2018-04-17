import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { List } from 'react-native-elements';
import { colors } from 'src/styles';

const keyExtractor = item => item.id;

const CategoriesListScreen = ({
  data,
  refreshCategoriesListData,
  refreshing,
  renderItem,
  EmptyListComponent
}) =>
  <List>
    <FlatList
      data={ data }
      renderItem={ renderItem }
      keyExtractor={ keyExtractor }
      refreshControl={
        <RefreshControl
          colors={ [colors.COLOR_PRIMARY] }
          refreshing={ refreshing }
          onRefresh={ refreshCategoriesListData } />
      }
      ListEmptyComponent={ EmptyListComponent } />
  </List>;

export default CategoriesListScreen;
