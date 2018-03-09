import React from 'react';
import { TextField } from 'react-native-material-textfield';

export default function TextInputField({
    input,
    label,
    secureTextEntry,
    editable,
    placeholder,
    meta: { error, touched }
}) {
    return (
        <TextField
            {...input}
            label={label}
            error={touched && error}
            editable={editable}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={input.onChange}
        />
    );
}
