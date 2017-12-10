import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NativeTouchable from '../NativeTouchable';
import styles from './IconButtonStyles';

export default function IconButton({ color, iconStyle, name, size, style, ...rest }) {
    return (
        <NativeTouchable {...rest}>
            <View style={[styles.container, style]}>
                <Icon
                    color={color}
                    name={name}
                    size={size}
                    style={iconStyle}
                />
            </View>
        </NativeTouchable>
    );
}

IconButton.propTypes = {
    color: PropTypes.string,
    iconStyle: Text.propTypes.style,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: PropTypes.oneOfType([
        ViewPropTypes.style,
        PropTypes.array
    ])
};
