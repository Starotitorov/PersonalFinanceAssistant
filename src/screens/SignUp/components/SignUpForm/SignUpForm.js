import React from 'react';
import { View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField, PrimaryButton } from 'src/components';
import validate from './validate';
import { SIGN_UP_FORM } from 'src/constants/forms';
import styles from './SignUpFormStyles';

function SignUpForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                <Field
                    name="name"
                    props={{
                        label: 'Name',
                        placeholder: 'Enter name...'
                    }}
                    component={TextInputField}
                />
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
                        secureTextEntry: true,
                        placeholder: 'Enter password...'
                    }}
                    component={TextInputField}
                />
                <Field
                    name="passwordConfirmation"
                    props={{
                        secureTextEntry: true,
                        label: 'Password confirmation',
                        placeholder: 'Enter password one more time...'
                    }}
                    component={TextInputField}
                />
            </View>
            <PrimaryButton
                title="Sign up"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: SIGN_UP_FORM,
    validate
})(SignUpForm);
