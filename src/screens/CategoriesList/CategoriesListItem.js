import React from 'react';
import { ListItem } from 'react-native-elements';

export default function CategoriesListItem({
    category: { name, icon, id },
    onSelectCategory
}) {
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
