import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { List } from 'react-native-elements';
import CategoriesListItem from './CategoriesListItem';
import { colors } from 'src/styles';

const keyExtractor = item => item.id;

export default class CategoriesList extends Component {
    renderItem = ({ item }) => {
        const { onSelectCategory } = this.props;

        return (
            <CategoriesListItem
                category={item}
                onSelectCategory={onSelectCategory}
            />
        );
    };

    render() {
        const { data, onRefresh, fetching } = this.props;

        return (
            <List>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={keyExtractor}
                    refreshControl={
                        <RefreshControl
                            colors={[colors.COLOR_PRIMARY]}
                            refreshing={fetching}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </List>
        );
    }
}
