import React from 'react';
import ActionButton from './ActionButton';
import configs from './configs'

export default function ConcreteActionButton({ onPress, type }) {
    const { iconName, backgroundColor, color } = configs[type];

    return (
        <ActionButton
            iconName={iconName}
            onPress={onPress}
            color={color}
            backgroundColor={backgroundColor}
        />
    );
}
