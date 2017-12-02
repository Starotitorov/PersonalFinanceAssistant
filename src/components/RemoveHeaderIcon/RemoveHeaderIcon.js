import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { margins, fontSizes } from 'src/styles';

export default function RemoveIcon({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Icon
                name="delete"
                style={styles.icon}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: margins.MARGIN_M,
        fontSize: fontSizes.FONT_SIZE_XL
    }
});
