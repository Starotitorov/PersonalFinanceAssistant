import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { List } from 'react-native-elements';
import CategoriesListItem from './components/CategoriesListItem';
import { withEmptyListComponent } from 'src/components';
import { colors } from 'src/styles';

const keyExtractor = item => item.id;

class CategoriesList extends Component {
    renderItem = ({ item }) => {
      const { selectCategory } = this.props;

      return (
        <CategoriesListItem
          category={ item }
          onSelectCategory={ selectCategory } />
      );
    };

    render() {
      const { data, refreshCategoriesListData, refreshing } = this.props;

      return (
        <List>
          <FlatList
            data={ data }
            renderItem={ this.renderItem }
            keyExtractor={ keyExtractor }
            refreshControl={
              <RefreshControl
                colors={ [colors.COLOR_PRIMARY] }
                refreshing={ refreshing }
                onRefresh={ refreshCategoriesListData } />
            }
            ListEmptyComponent={ this.props.EmptyListComponent } />
        </List>
      );
    }
}

export default withEmptyListComponent(CategoriesList, 'No categories');
