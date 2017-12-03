import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class CategoriesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'flex-end' }}>
                <Button
                    onPress={this.props.onAddCategory}
                    title="create category"
                />
            </View>
        );
    }
}