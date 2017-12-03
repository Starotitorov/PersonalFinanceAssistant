import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, StyleSheet, Button } from 'react-native';
import { EDIT_ACCOUNT_FORM } from 'src/constants/forms';
import moment from 'moment';
import { TextInputField, DatePickerField } from 'src/components';
import validate from './validate';

function EditAccountForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <Field
                name="name"
                props={{
                    label: 'Name',
                    placeholder: 'Enter account name...'
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
            <Button
                title="Edit account"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: EDIT_ACCOUNT_FORM,
    validate
})(EditAccountForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        minWidth: 300
    }
});
