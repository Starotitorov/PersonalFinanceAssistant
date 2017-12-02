import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AccountsListScreen() {
    return (
        <View style={styles.container}>
            <Text>Accounts List Screen</Text>
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
