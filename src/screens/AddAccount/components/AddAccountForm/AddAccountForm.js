import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, StyleSheet, Button } from 'react-native';
import { ADD_ACCOUNT_FORM } from 'src/constants/forms';
import moment from 'moment';
import { TextInputField, DatePickerField } from 'src/components'

function AddAccountForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Field
                    name="name"
                    props={{
                        label: 'Name',
                        placeholder: 'Enter account name...'
                    }}
                    component={TextInputField}
                />
                <Field
                    name="initialBalance"
                    props={{
                        label: 'Initial balance',
                        placeholder: 'Enter initial balance...'
                    }}
                    component={TextInputField}
                />
                <Field
                    name="initialDate"
                    props={{
                        label: 'Initial date',
                        placeholder: 'Enter initial date...'
                    }}
                    format={value => moment(value).format('MM/DD/YYYY')}
                    component={DatePickerField}
                />
            </View>
            <Button
                title="Add account"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: ADD_ACCOUNT_FORM
})(AddAccountForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    form: {
        justifyContent: 'center',
        alignItems: 'stretch',
        minWidth: 300
    }
});
