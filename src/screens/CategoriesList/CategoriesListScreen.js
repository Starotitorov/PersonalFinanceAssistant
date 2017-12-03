import React, { Component } from 'react';
import { View, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

const keyExtractor = item => item.id;

export default class CategoriesList extends Component {
    renderItem = ({ item }) => {
        const onPress = this.props.onSelectCategory.bind(null, item);

        return (
            <TouchableHighlight onPress={onPress}>
                <View style={{ borderWidth: 1, width: '100%' }}/>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
});
