import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField } from 'src/components';
import { CHANGE_PASSWORD_FORM } from 'src/constants/forms';
import { PrimaryButton } from 'src/components';

function ChangePasswordForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <Field
                name="oldPassword"
                props={{
                    secureTextEntry: true,
                    label: 'Old password',
                    placeholder: 'Enter old password...'
                }}
                component={TextInputField}
            />
            <Field
                name="password"
                props={{
                    secureTextEntry: true,
                    label: 'New password',
                    placeholder: 'Enter new password...'
                }}
                component={TextInputField}
            />
            <Field
                name="passwordConfirmation"
                props={{
                    secureTextEntry: true,
                    label: 'New password confirmation',
                    placeholder: 'Enter new password one more time...'
                }}
                component={TextInputField}
            />
            <PrimaryButton
                title="Change"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: CHANGE_PASSWORD_FORM,
})(ChangePasswordForm);

const styles = StyleSheet.create({
    container: {
        minWidth: 300
    }
});
