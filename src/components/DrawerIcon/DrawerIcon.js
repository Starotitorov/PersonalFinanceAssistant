import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DRAWER_ICON_SIZE = 24;

export default function DrawerIcon({ name, tintColor }) {
    return (
        <Icon
            size={DRAWER_ICON_SIZE}
            name={name}
            color={tintColor}
        />
    );
}
