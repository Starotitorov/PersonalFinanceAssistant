import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './TextInputFieldStyles';

export default function TextInputField(
    {
        input,
        label,
        secureTextEntry,
        editable,
        placeholder,
        meta: { error, touched }
    }
) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                {...input}
                editable={editable}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={input.onChange}
            />
            {error && touched &&
                <Text style={styles.errorMessage}>{error}</Text>
            }
        </View>
    );
}
