import React, { Component } from 'react';
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './AddCategoryScreenStyles';

export default class AddCategoryScreen extends Component {
    handleSubmit = ({ name: nameValue, ...rest }) => {
        const name = nameValue.trim();

        return this.props.addCategory({ name, ...rest });
    };

    render() {
        return (
            <View style={styles.container}>
                <CategoryForm
                    createCategory
                    initialValues={this.props.initialValues}
                    onSubmit={this.handleSubmit}
                />
            </View>
        );
    }
}
