import React from 'react';
import { List } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native';

const keyExtractor = item => item.id;

const CategoriesListScreen = ({
  data,
  renderItem,
  EmptyListComponent
}) =>
  <ScrollView>
    <List>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ keyExtractor }
        ListEmptyComponent={ EmptyListComponent } />
    </List>
  </ScrollView>;

export default CategoriesListScreen;
