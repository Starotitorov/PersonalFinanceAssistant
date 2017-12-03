import React from 'react';
import { ListItem } from 'react-native-elements';

export default function CategoriesListItem(
    {
        category: { id, icon, name },
        onSelectCategory
    }
) {
    return (
        <ListItem
            title={name}
            leftIcon={{
                name: icon,
                type: 'material-community'
            }}
            onPress={() => onSelectCategory(id)}
        />
    );
}
