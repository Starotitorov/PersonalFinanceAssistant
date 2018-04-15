import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { colors } from 'src/styles';

export default function DrawerButton({ navigation }) {
  return (
    <IconButton
      size={ 26 }
      color={ colors.COLOR_WHITE }
      name="md-menu"
      onPress={ () => navigation.navigate('DrawerOpen') } />
  );
}

DrawerButton.propTypes = {
  navigation: PropTypes.shape({})
};
