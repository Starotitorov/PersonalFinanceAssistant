import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectInput } from 'src/components';
import options from './options';

export default function TransactionsHeaderTitle({
    changePeriodView,
    selectedValue,
    accountOptions,
    selectedAccountId,
    setSelectedAccount
}) {
    return (
        <View style={styles.container}>
            <View style={styles.flexGrow}>
                <SelectInput
                    onChange={setSelectedAccount}
                    value={selectedAccountId}
                    options={accountOptions}
                />
            </View>
            <View style={styles.flexGrow}>
                <SelectInput
                    onChange={changePeriodView}
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
