import React from 'react';
import { View, Text } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import styles from './SelectInputStyles';

export default function SelectInputComponent({ label, options, ...rest }) {
    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <SelectInput
                {...rest}
                value={rest.value}
                options={options}
                onSubmitEditing={rest.onChange}
            />
        </View>
    );
}
