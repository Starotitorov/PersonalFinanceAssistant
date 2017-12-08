import React, { Component } from 'react';
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './AddCategoryScreenStyles';

export default class AddCategoryScreen extends Component {
    handleSubmit = ({ name: nameValue, ...rest }) => {
        const name = nameValue.trim();

        this.props.onAddCategory({ name, ...rest });
    };

    render() {
        return (
            <View style={styles.container}>
                <CategoryForm
                    initialValues={this.props.initialValues}
                    onSubmit={this.handleSubmit}
                />
            </View>
        );
    }
}
