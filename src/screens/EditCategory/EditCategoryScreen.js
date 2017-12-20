import React, { Component } from 'react';
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './EditCategoryScreenStyles';

export default class EditCategoryScreen extends Component {
    handleSubmit = ({ name: nameValue, ...rest }) => {
        const name = nameValue.trim();

        return this.props.onUpdateCategory({ name, ...rest });
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
