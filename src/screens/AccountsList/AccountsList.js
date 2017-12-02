import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';

export default function AccountsListScreen() {
    return (
        <View style={styles.container}>
            <Text>Accounts List Screen</Text>
            <ActionButton
                iconName="add"
                backgroundColor="#f00"
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
