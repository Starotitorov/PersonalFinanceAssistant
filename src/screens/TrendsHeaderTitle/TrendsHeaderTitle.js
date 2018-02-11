import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectInput } from 'src/components';

export default function TrendsHeaderTitle({
    accountOptions,
    selectedAccountId,
    setSelectedAccount
}) {
    return (
        <View style={styles.container}>
            <SelectInput
                onChange={setSelectedAccount}
                value={selectedAccountId}
                options={accountOptions}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});
