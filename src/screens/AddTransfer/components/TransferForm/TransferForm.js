import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { TRANSFER_FORM } from 'src/constants/forms';
import {
    TextInputField as TextInput,
    SelectInputField as SelectInput,
    DatePickerField
} from 'src/components';
import styles from './TransferFormStyles';

function TransferForm({ handleSubmit, submitting, invalid, options }) {
    return (
        <View style={styles.container}>
            <Field
                name="value"
                props={{
                    label: 'Sum, BYN',
                    placeholder: 'Enter sum to transfer...'
                }}
                component={TextInput}
            />
            <Field
                name="fromAccountId"
                props={{
                    label: 'From account',
                    options: options.accounts
                }}
                component={SelectInput}
            />
            <Field
                name="toAccountId"
                props={{
                    label: 'To account',
                    options: options.accounts
                }}
                component={SelectInput}
            />
            <Field
                name="date"
                props={{
                    label: 'Date'
                }}
                format={value => moment(value).format('MM/DD/YYYY')}
                component={DatePickerField}
            />
            <Field
                name="notes"
                props={{
                    label: 'Notes',
                    placeholder: 'Enter notes...'
                }}
                component={TextInput}
            />
            <Button
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title="Transfer"
            />
        </View>
    );
}

export default reduxForm({
    form: TRANSFER_FORM,
    initialValues: {
        date: Date.now()
    }
})(TransferForm);
