import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

export default function AccountsListScreen({ onAddAccount }) {
    return (
        <View style={styles.container}>
            <Text>Accounts List Screen</Text>
            <ActionButton.Button
                type={ActionButton.types.ADD}
                onPress={onAddAccount}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
