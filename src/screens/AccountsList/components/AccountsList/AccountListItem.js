import React from 'react';
import { ListItem } from 'react-native-elements';

export default function AccountListItem(
    {
        account: { id, icon, balance, name },
        onSelectAccount
    }
) {
    return (
        <ListItem
            title={name}
            leftIcon={{name: icon}}
            rightTitle={String(balance)}
            onPress={() => onSelectAccount(id)}
        />
    );
}
