import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-elements';

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
      ListEmptyComponent={ EmptyListComponent } />
  </List>;

export default CategoriesListScreen;
