import React from 'react';
import { View, Picker } from 'react-native';
import options from './options';

export default function TransactionsHeader({ onValueChange, selectedValue }) {
    return (
        <View>
            <Picker
                onValueChange={onValueChange}
                selectedValue={selectedValue}
            >
                {
                    options.map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))
                }
            </Picker>
        </View>
    )
}