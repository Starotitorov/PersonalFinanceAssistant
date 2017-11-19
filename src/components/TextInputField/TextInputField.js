import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './TextInputFieldStyles';

export default function TextInputField({ input, label, placeholder,  meta: { error, touched } }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                {...input}
                placeholder={placeholder}
                onChangeText={input.onChange}
            />
            {error && touched &&
                <Text style={styles.errorMessage}>{error}</Text>
            }
        </View>
    );
}
