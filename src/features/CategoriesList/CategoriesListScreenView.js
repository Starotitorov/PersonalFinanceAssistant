import React from 'react';
import { withHandlers } from 'recompose';
import { withEmptyListComponent } from 'src/components';
import CategoriesListItem from './components/CategoriesListItem';
import CategoriesListScreen from './CategoriesListScreen';

const withRenderItem = withHandlers({
  renderItem: ({ selectCategory }) => ({ item }) =>
    <CategoriesListItem
      category={ item }
      onSelectCategory={ selectCategory } />
});

export default withRenderItem(withEmptyListComponent(CategoriesListScreen, 'No categories'));
