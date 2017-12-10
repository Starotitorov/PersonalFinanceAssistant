import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, StyleSheet, Button } from 'react-native';
import { ACCOUNT_FORM } from 'src/constants/forms';
import moment from 'moment';
import { TextInputField, DatePickerField } from 'src/components';
import { IconField } from 'src/components';
import validate from './validate';

function AccountForm({ handleSubmit, submitting, invalid, createAccount }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Field
                    name="icon"
                    component={IconField}
                />
                <View style={styles.flexGrow}>
                    <Field
                        name="name"
                        props={{
                            label: 'Account name',
                            placeholder: 'Enter account name...'
                        }}
                        component={TextInputField}
                    />
                </View>
            </View>
            {createAccount &&
                <Field
                    name="balance"
                    props={{
                        label: 'Initial balance, BYN',
                        placeholder: 'Enter initial balance...'
                    }}
                    component={TextInputField}
                />
            }
            <Field
                name="initialDate"
                props={{
                    label: 'Initial date',
                    placeholder: 'Enter initial date...'
                }}
                format={value => moment(value).format('MM/DD/YYYY')}
                component={DatePickerField}
            />
            <Button
                title="Add account"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: ACCOUNT_FORM,
    initialValues: {
        icon: 'cash',
        initialDate: moment.now()
    },
    validate
})(AccountForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        minWidth: 300
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexGrow: {
        flexGrow: 1
    }
});
