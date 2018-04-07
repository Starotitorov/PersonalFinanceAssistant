import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import {
    TextInputField,
    DatePickerField,
    SelectInputField,
    IconField,
    PrimaryButton,
    Field
} from 'src/components';
import { normalizeDate, formatDate } from 'src/utils';
import styles from './AccountFormStyles';

const AccountForm = ({
    handleSubmit,
    submitting,
    invalid,
    viewModel = {},
    submitButtonText
}) =>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.fields}>
            <View style={styles.row}>
                <Field
                    {...viewModel.icon}
                    style={styles.icon}
                    component={IconField}/>
                <View style={styles.flexGrow}>
                    <Field
                        {...viewModel.name}
                        component={TextInputField}/>
                </View>
            </View>
            <Field
                {...viewModel.balance}
                component={TextInputField}/>
            <Field
                {...viewModel.currency}
                component={SelectInputField}/>
            <Field
                {...viewModel.initialDate}
                format={formatDate}
                normalize={normalizeDate}
                component={DatePickerField}/>
        </View>
        <PrimaryButton
            title={submitButtonText}
            disabled={submitting || invalid}
            onPress={handleSubmit}/>
    </ScrollView>;

AccountForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    viewModel: PropTypes.shape({}),
    submitButtonText: PropTypes.string
};

export default AccountForm;
