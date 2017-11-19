import React from 'react';
import { View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField } from 'src/components';
import validate from './validate';
import styles from './LogInFormStyles';

function LogInForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <Field
                name="email"
                props={{
                    label: 'Email',
                    placeholder: 'Enter email...'
                }}
                component={TextInputField}
            />
            <Field
                name="password"
                props={{
                    label: 'Password',
                    placeholder: 'Enter password...'
                }}
                component={TextInputField}
            />
            <Button
                title="Log in"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: 'logIn',
    validate
})(LogInForm);
