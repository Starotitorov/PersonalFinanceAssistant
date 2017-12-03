import React, { Component } from 'react';
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './AddCategoryScreenStyles';

export default class AddCategoryScreen extends Component {
    handleSubmit = ({ icon, categoryType, ...values }) => {
        const name = values.name.trim();

        this.props.onAddCategory({ categoryType, icon, name });
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