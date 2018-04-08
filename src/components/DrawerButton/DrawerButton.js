import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { colors } from 'src/styles';

export default function DrawerButton({ navigation }) {
    return (
        <IconButton
            onPress={() => navigation.navigate('DrawerOpen')}
            size={26}
            color={colors.COLOR_WHITE}
            name="md-menu" />
    );
}

DrawerButton.propTypes = {
    navigation: PropTypes.object.isRequired
};
