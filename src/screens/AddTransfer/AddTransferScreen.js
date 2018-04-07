import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import TransferForm from './components/TransferForm';
import styles from './AddTransferScreenStyles';

const AddTransferScreen = ({ addTransfer, options }) =>
    <View style={styles.container}>
        <TransferForm
            enableReinitialize
            onSubmit={addTransfer}
            options={options} />
    </View>;

AddTransferScreen.propTypes = {
    addTransfer: PropTypes.func,
    options: PropTypes.shape({})
};

export default AddTransferScreen;
