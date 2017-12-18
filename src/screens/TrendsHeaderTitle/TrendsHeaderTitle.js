import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectInput } from 'src/components';

export default function TrendsHeaderTitle(
    {
        accountOptions,
        selectedAccountId,
        onChangeAccount
    }
) {
    return (
        <View style={styles.container}>
            <SelectInput
                onChange={onChangeAccount}
                value={selectedAccountId}
                options={accountOptions}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});
