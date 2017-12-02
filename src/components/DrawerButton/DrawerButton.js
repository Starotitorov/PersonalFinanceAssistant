import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './DrawerButtonStyles';

export default function DrawerButton({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DrawerOpen')}
        >
            <Icon
                name="menu"
                style={styles.icon}
            />
        </TouchableOpacity>
    );
}

DrawerButton.propTypes = {
    navigation: PropTypes.object.isRequired,
};
