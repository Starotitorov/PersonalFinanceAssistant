import React from 'react';
import { View } from 'react-native';
import SelectInput from 'react-native-select-input-ios';

export default function SelectInputComponent({ options, ...rest }) {
    return (
        <View>
            <SelectInput
                {...rest}
                value={rest.value}
                options={options}
                onSubmitEditing={rest.onChange}
            />
        </View>
    );
}
