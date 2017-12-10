import React from 'react';
import { Picker, View, Text } from 'react-native';
import styles from './SelectInputStyles';

export default function SelectInput({ label, options, ...rest }) {
    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <Picker
                {...rest}
                onValueChange={rest.onChange}
                selectedValue={rest.value}
            >
                {options.map(option => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
}
