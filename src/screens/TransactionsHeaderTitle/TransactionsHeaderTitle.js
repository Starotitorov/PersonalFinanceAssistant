import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectInput } from 'src/components';
import options from './options';

export default function TransactionsHeaderTitle(
    {
        onValueChange,
        selectedValue,
        accountOptions,
        selectedAccountId,
        onChangeAccount
    }
) {
    return (
        <View style={styles.container}>
            <View style={styles.flexGrow}>
                <SelectInput
                    onChange={onChangeAccount}
                    value={selectedAccountId}
                    options={accountOptions}
                />
            </View>
            <View style={styles.flexGrow}>
                <SelectInput
                    onChange={onValueChange}
                    value={selectedValue}
                    options={options}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexGrow: {
        flexGrow: 1
    }
});
