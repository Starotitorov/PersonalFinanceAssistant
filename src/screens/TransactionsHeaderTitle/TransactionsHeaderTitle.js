import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectInput } from 'src/components';
import options from './options';

export default function TransactionsHeaderTitle({ onValueChange, selectedValue }) {
    return (
        <View style={styles.container}>
            <SelectInput
                onChange={onValueChange}
                value={selectedValue}
                options={options}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
