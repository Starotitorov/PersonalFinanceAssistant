import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton'

export default function DrawerButton({ navigation }) {
    return (
        <IconButton
            onPress={() => navigation.navigate('DrawerOpen')}
            size={26}
            name="md-menu"
        />
    );
}

DrawerButton.propTypes = {
    navigation: PropTypes.object.isRequired
};
