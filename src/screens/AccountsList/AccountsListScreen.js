import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'src/components';
import AccountsList from './components/AccountsList';

export default function AccountsListScreen(
    {
        refreshAccounts,
        refreshing,
        accounts,
        addAccount,
        editAccount
    }
) {
    return (
        <View style={styles.container}>
            <AccountsList
                refreshing={refreshing}
                accounts={accounts}
                onSelectAccount={ editAccount }
                onRefresh={ refreshAccounts }
            />
            <ActionButton.Button
                type={ActionButton.types.ADD}
                onPress={ addAccount }
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
