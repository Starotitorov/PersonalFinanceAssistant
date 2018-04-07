import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { CategoryForm } from 'src/components';
import styles from './EditCategoryScreenStyles';

const EditCategoryScreen = ({ initialValues, viewModel, handleUpdateCategory }) =>
    <View style={styles.container}>
        <CategoryForm
            submitButtonText="Save changes"
            enableReinitialize
            viewModel={viewModel}
            initialValues={initialValues}
            onSubmit={handleUpdateCategory}
        />
    </View>;

EditCategoryScreen.propTypes = {
    initialValues: PropTypes.shape({}),
    viewModel: PropTypes.shape({}),
    handleUpdateCategory: PropTypes.func
};

export default EditCategoryScreen;
