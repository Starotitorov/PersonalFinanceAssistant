import React from 'react';
import { Picker, View, Text } from 'react-native';
import styles from './SelectInputFieldStyles';

export default function SelectInput({ input, label, options }) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Picker
                {...input}
                onValueChange={input.onChange}
                selectedValue={input.value}
            >
                {options.map(option => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
}
