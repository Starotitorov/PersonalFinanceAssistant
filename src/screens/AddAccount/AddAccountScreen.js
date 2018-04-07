import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AccountForm } from 'src/components';
import styles from './AddAccountStyles'

const AddAccountScreen = ({ addAccount, viewModel }) =>
    <View style={ styles.container }>
        <AccountForm onSubmit={ addAccount } viewModel={ viewModel } submitButtonText="Add account" />
    </View>

AddAccountScreen.propTypes = {
    addAccount: PropTypes.func,
    viewModel: PropTypes.shape({})
};

export default AddAccountScreen;
