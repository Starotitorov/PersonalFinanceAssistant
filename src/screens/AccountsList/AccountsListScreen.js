import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';

export default function AccountsListScreen({ fetching, accounts, onAddAccount, onSelectAccount }) {
    return (
        <View style={styles.container}>
            <AccountsList
                isLoading={fetching}
                accounts={accounts}
                onSelectAccount={onSelectAccount}
            />
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
        alignItems: 'stretch'
    }
});
