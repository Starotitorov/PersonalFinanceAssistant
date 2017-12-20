import React from 'react';
import { ScrollView, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { TRANSFER_FORM } from 'src/constants/forms';
import {
    TextInputField as TextInput,
    SelectInputField as SelectInput,
    DatePickerField,
    PrimaryButton
} from 'src/components';
import styles from './TransferFormStyles';
import validate from './validate';

function TransferForm({ isSameCurrency, handleSubmit, submitting, invalid, options }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Field
                name="value"
                props={{
                    label: 'Sum',
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
            {
                !isSameCurrency &&
                    <Field
                        name="exchangeRate"
                        props={{
                            label: 'Exchange rate',
                            placeholder: 'Enter exchange rate'
                        }}
                        component={TextInput}
                    />
            }
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
            <PrimaryButton
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title="Transfer"
            />
        </ScrollView>
    );
}

export default reduxForm({
    form: TRANSFER_FORM,
    initialValues: {
        date: Date.now(),
        exchangeRate: '1'
    },
    validate
})(TransferForm);
