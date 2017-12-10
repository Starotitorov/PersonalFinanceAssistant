import React from 'react';
import { ListItem } from 'react-native-elements';

export default function AccountListItem(
    {
        account: { id, icon, balance, name, currency },
        onSelectAccount
    }
) {
    return (
        <ListItem
            title={name}
            leftIcon={{
                name: icon,
                type: 'material-community'
            }}
            rightTitle={`${balance}, ${currency}`}
            onPress={() => onSelectAccount(id)}
        />
    );
}
